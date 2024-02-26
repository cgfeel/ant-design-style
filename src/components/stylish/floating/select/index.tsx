import {
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    SideObject,
    autoUpdate,
    flip,
    inner,
    offset,
    shift,
    size,
    useClick,
    useDismiss,
    useFloating,
    useInnerOffset,
    useInteractions,
    useListNavigation,
    useRole,
    useTypeahead,
} from "@floating-ui/react";
import { SelectProps } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import useControlledState from "use-merge-value";
import ScrollArrow, { SCROLL_ARROW_PADDING } from "./arrow";
import SelectItem from "./item";
import { useStyles } from "./style";

const MacSelect: FC<MacSelectProps> = ({ defaultValue, value, options = [], prefixCls: cls = "mac-select" }) => {
    // `use-merge-value`是`useMergedState`的别名，当前选定的索引
    const [selectedIndex, setSelectedIndex] = useControlledState(0, { defaultValue, value });
    const { styles } = useStyles(cls);

    // ===== ref =====
    // 收集每一个下拉选项，节点将在遍历节点的时候，在ref中获取
    // 目前可以通过`blockSelection`屏蔽所有选择，或通过`allowSelectRef`在功能上单独匹配某一项（暂不支持视觉上单独禁止）
    const listRef = useRef<(HTMLElement | null)[]>([]);

    // 收集每一个下拉选项的label，节点字符将在遍历节点的时候，在ref中获取
    // 如果要禁止选择列表中的某一项，可以在数组中相关的索引位置设null
    const listContentRef = useRef<(string | null)[]>([]);

    // 收集溢出数据的ref
    const overflowRef = useRef<SideObject>(null);

    // 是否允许选择下拉框选择项，详细见`blockSelection`
    const allowSelectRef = useRef(false);

    // 鉴定是否是非touch设备
    const allowMouseUpRef = useRef(true);

    // 设置一个定时器，控制下拉列表上下箭头展示、阻塞下拉列表项选择
    const selectTimeoutRef = useRef(-1);

    // 悬浮的下拉菜单外层限制选项高度的div，当下拉选项超出范围时负责滚动
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // ===== state =====
    // 开启、关闭
    const [open, setOpen] = useState(false);

    // 选中项的索引
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // 是否进入回退模式
    const [fallback, setFallback] = useState(false);

    // 锚定物的偏移量
    const [innerOffset, setInnerOffset] = useState(0);

    // 判断是否是移动设备
    const [touch, setTouch] = useState(false);

    // 记录`scrollRef`的`scrollTop`，更新后的值，用于去刷新滚动列表的箭头展示状态
    const [scrollTop, setScrollTop] = useState(0);

    /**
     * 阻止选择选项，比如触摸屏设备按下箭头，这里和`allowSelectRef`一组使用
     *  - blockSelection：决定下拉列表的`button`元素是否disabled
     *  - allowSelectRef：决定点击下拉列表后，在监听事件处理中是否执行相关操作
     */
    const [blockSelection, setBlocakSelection] = useState(false);

    if (!open) {
        // 关闭下拉框，设置锚定偏移量为0
        if (innerOffset !== 0) setInnerOffset(0);

        // 关闭下拉框，关闭回退模式
        if (fallback) setFallback(false);

        // 关闭下拉框，取消禁止选择
        if (blockSelection) setBlocakSelection(false);
    }

    /**
     * `floating-ui/react"`库的主hook，用作其他所有hook和组件的控制器
     *  - context: 包含提供相关hooks和components的context，比如`useInteractions`的arry props中的hooks
     *  - ref: 引用和悬浮元素的ref集合
     *  - strategy: 悬浮元素的定位策略，包含：`absolute`、`fixed`
     *  - x: 浮动元素的横坐标，用于替代`floatingStyles`，使用自定义的css去手动定位浮动元素
     *  - y: 浮动元素的纵坐标，用于替代`floatingStyles`，使用自定义的css去手动定位浮动元素
     *  - isPositioned:
     *     - 悬浮元素是否已定位，在内部的`effect`中使用。需要设置`open`选项才能使用
     *     - 在这个例子中，`isPositioned`用于悬浮元素定位时，箭头还未激活时，去判断是否展示上下滚动箭头
     */
    const { context, isPositioned, refs, strategy, x, y } = useFloating({
        // 悬浮元素对于参考元素的相对位置（起始值）有12个，这里是下方靠左对齐
        placement: "bottom-start",

        // 有条件展开
        open,

        /**
         * 用于改变悬浮元素展开的状态，除了接受`open`状态外，完成的有3个参数
         *  - isOpen: boolean，展开状态
         *  - event: Event，eg.MouseEvent
         *  - reason: OpenChangeReason，eg.'hover'
         */
        onOpenChange: setOpen,

        /**
         * 在悬浮元素和参考元素挂起时调用的函数，其内部可以返回一个函数作为元素卸载时触发的清理函数
         * 这允许你传递签名与选项匹配的`autoUpdate`，以确保浮动元素保持锚定到参考元素
         * 只有是有条件的渲染情况下（而非css来控制展现情况）才需要使用`autoUpdate`
         */
        whileElementsMounted: autoUpdate,

        // 根据回退情况决定中间件
        middleware: fallback
            ? [
                  /**
                   * 沿着指定的轴平移元素，如果提供的是数值则表示`mainAxes`，详细见：https://floating-ui.com/docs/offset#alignmentaxis
                   *  - mainAxis：沿着浮动元素侧边延伸的轴，表示浮动元素和参考元素的距离
                   *  - crossAxis：沿着浮动元素对齐方向延伸的轴，表示浮动元素和参考元素滑动的距离（语意上难道不是横轴？）
                   *  - alignmentAxis: 类似`crossAxis`并且会覆盖`crossAxis`；设置正数将会与边缘相反的方向对齐，负数则相反
                   */
                  offset(5),

                  /**
                   * 移动设备通过`shift`完成移位，否则通过`flip`执行翻转
                   * shift:
                   *  - 移动浮动元素使其保持在视图中
                   *  - https://floating-ui.com/docs/shift
                   * ----
                   * flip:
                   *  - 改变移动元素的位置使其保留在视图中
                   *  - https://floating-ui.com/docs/flip
                   * ----
                   * 区别：
                   *  - shift：浮动元素抵达边界后，只拖动参考元素，浮动元素参照边界不再移位
                   *  - flip：浮动元素抵达边界后，通过翻转改变浮动元素位置，浮动元素会对其参考元素，即便参考元素溢出边界也一同溢出
                   * ----
                   * 名词解释：
                   *  - opposite axis：相反的轴，想象一个十字架，X轴和Y轴方向相反
                   *  - opposite edges：相对边界，想象一个方框口，上下和左右是两对相对的边
                   *  - 这两个名词在文档经常出现，但意义完全不同
                   * ----
                   * 补充说明：
                   *  - padding：给边界周围一个padding，达到这个位置时则表示已经溢出了
                   *  - 来自`detectOverflow`，https://floating-ui.com/docs/detectOverflow#padding
                   */
                  touch
                      ? shift({ crossAxis: true, padding: SCROLL_ARROW_PADDING })
                      : flip({ padding: SCROLL_ARROW_PADDING }),

                  /**
                   * 提供用于改变浮动元素尺寸的数据
                   *  - 这里使用浮动元素溢出裁剪上下文之前的高度，作为下拉菜单外层的高度
                   * ----
                   * 关于padding，来自文档的提醒：
                   *  - If you’re using the padding option in either middleware, ensure they share the same value.
                   *  - https://floating-ui.com/docs/size#using-with-flip
                   * ----
                   * 关于顺序：
                   *  - 这里采用适应优先，所以`filp`位于`size`前面
                   *  - 如果采用初始值优先，将`filp`位于`size`后面
                   */
                  size({
                      apply({ availableHeight }) {
                          Object.assign(scrollRef.current?.style ?? {}, {
                              maxHeight: `${availableHeight}px`,
                          });
                      },
                      padding: SCROLL_ARROW_PADDING,
                  }),
              ]
            : [
                  /**
                   * 定位浮动元素，使其内部的元素锚定参照元素，并处理滚动和溢出的行为
                   */
                  inner({
                      // 传入下拉选项的ref集合
                      listRef,

                      // 传入收集溢出数据的ref
                      overflowRef,

                      // 一个包含HtmlElement的ref，用作滚动元素，而不是浮动元素。将内部元素直接当做子集定位，而不受滚动影响
                      scrollRef,

                      // 选中项的索引
                      index: selectedIndex,

                      // 锚定物的偏移量
                      offset: innerOffset,

                      // 当定位发生回退的时候调用此回调，当回退发生时应该创建标准的锚定位置作为中间件
                      onFallbackChange: setFallback,

                      // 同以上所有padding的注释
                      padding: SCROLL_ARROW_PADDING,

                      // 在回退定位使用前，指定应该展示项目的最小数量
                      minItemsVisible: touch ? 8 : 4,

                      // 设置参考元素和边界的溢出距离，以像素为单位，如果参考相对距离小于则触发回退操作
                      referenceOverflowThreshold: 20,
                  }),

                  // 参考上述`offset`备注
                  offset({ crossAxis: -4 }),
              ],
    });

    /**
     * 一个将交互事件处理合并、组织在一起的hook，并保留记录
     * 交互式的hooks集合，主要做两件事：①为传入的hook内部设置独立工作的`effect`、②返回事件处理按照预期传递给元素为其添加功能
     * ----
     * prop getters：
     *  - 可以理解为“属性获取器”。这是一个函数，当调用时，它会返回一些属性（prop）对象，然后这些属性对象可以被直接应用到React元素上。
     *  - “prop getters”可能是获取并归并多个交互Hook返回的事件处理器的一种方式。这意味着你可以返回一个对象，该对象包含了所有需要合并到组件渲染的属性或者事件处理器。
     *  - 换句话说，"prop getters"用来帮助你更好地管理和获取这些属性，并结构化你的组件渲染。
     * ----
     * 返回对象用于分布在指定元素中：
     *  - getReferenceProps：参考元素的prop getter
     *  - getFloatingProps：浮动元素的prop getter
     *  - getItemProps：浮动元素列表中每一项的prop getter，仅适用于 listbox (e.g. select or combobox) or menu roles.
     * ----
     * 备注：
     *  - 所有事件处理都必须通过prop getter，而不是元素本身
     *  - 交互Hooks中每一个hook，都需要传递来自`useFloating`提供的`context`
     */
    const { getFloatingProps, getItemProps, getReferenceProps } = useInteractions([
        // 点击参考元素开启获关闭浮动元素，这里采用`mousedown`
        useClick(context, { event: "mousedown" }),

        // 按下键盘`esc`或点击浮动元素外部时，以及点击参考元素和悬浮元素之外的内容时，关闭浮动元素
        useDismiss(context),

        // 给浮动元素和参考元素添加屏幕阅读的prop geter，用于增加ARIA的特性，这里设置的角色为下拉框
        useRole(context, { role: "listbox" }),

        // 偏移滚轮锚定的事件，扩展浮动元素的高度，用于展示更多列表项，常用于下拉菜单
        useInnerOffset(context, {
            // 未回退时启用
            enabled: !fallback,

            // 发生在滚轮事件偏移锚定时，使用新的偏移量调用回调函数
            onChange: setInnerOffset,

            // 包含侧边对象的ref，用于确保浮动元素的溢出信息
            overflowRef,

            // 滚动布局的ref
            scrollRef,
        }),
        /**
         * 加入键盘箭头导航功能可以增加方便用户在项目列表中进行操作的用户体验
         * 最终将通过返回的prop getter: `getItemProps`，将其分布到每一个下拉列表项执行操作
         * ----
         * `useListNavigation()`允许和`<FloatingFocusManager>`同时使用，区别在于：
         *  - `useListNavigation()`通过箭头聚焦列表选项，`<FloatingFocusManager>`通过`tab`聚焦选项
         *  - 详细见下方`<FloatingFocusManager>`和列表选项中的`tabIndex`说明
         */
        useListNavigation(context, {
            // 一个包含列表项的ref数组，必填项
            listRef,

            // 当前选中的项目索引，必须填
            activeIndex,

            // 当前选中的项目索引
            selectedIndex,

            // 当用户导航时将传递当前选中的`activeIndex`进行回调
            onNavigate: setActiveIndex,
        }),
        // 用户输入时回调，需要和`useListNavigation`一起使用
        useTypeahead(context, {
            // 一个包含字符数组的ref，必填项，它对应了列表中的html元素
            listRef: listContentRef,

            // 选中项，必填项
            activeIndex,

            // 如果找到用户输入调用回调函数，目前来看似乎对中文支持不够友好
            onMatch: open ? setActiveIndex : setSelectedIndex,
        }),
    ]);

    useEffect(() => {
        if (open) {
            // 下拉列表展开后过300毫秒才允许选择下拉选项
            selectTimeoutRef.current = window.setTimeout(() => {
                allowSelectRef.current = true;
            }, 300);
        } else {
            // 关闭列表后不再接受处理下拉项点击事件，并重新默认当前为非触摸的设备，待下次展开并`touch`再做决定
            allowMouseUpRef.current = true;
            allowSelectRef.current = false;
        }
        return () => {
            // 这里也demo不一样，无论如何销毁时都会注销`selectTimeoutRef.current`
            window.clearTimeout(selectTimeoutRef.current);
        };
    }, [open, selectTimeoutRef]);

    /**
     * 下拉列表中触点(touch and mouse)进入上下箭头时触发的回调函数
     *  - 下拉列表中的箭头展示状态，除了内部自身的point事件处理外
     *  - 还通过当前回调更新`setInnerOffset`和`setScrollTop`状态值，触发箭头组件中的`useLayoutEffect`
     *  - 所以当前回调函数还除了修正浮动元素的偏移量外，还决定了下拉列表的箭头展示状态
     * ----
     * 备注：
     *  - 这里采用`flushSync`的原因参考：https://floating-ui.com/docs/size#usage
     */
    const handleArrowScroll = (amount: number) => {
        if (fallback) {
            // 进入回退时，滚动下拉列表的外框，并且更新滚动状态值用于让下拉列表中的箭头不断检测展示状态
            if (scrollRef.current) {
                scrollRef.current.scrollTop -= amount;

                // 阻塞更新scrollTop用于让下拉列表中的箭头不断检测展示状态
                flushSync(() => setScrollTop(scrollRef.current?.scrollTop ?? 0));
            }
        } else {
            /**
             * 阻塞刷新Dom，设置锚定的偏移量，两个用途
             *  - 交给inner用于锚定浮动元素偏移量
             *  - 更新偏移量的值用于让下拉列表中的箭头不断检测展示状态
             */
            flushSync(() => setInnerOffset(value => value - amount));
        }
    };

    // 在决定隐藏下拉选项里的箭头的时候，在修改箭头状态为`idle`之前触发当前回调
    // 目的在于防止触摸屏设备上，在箭头消失时避免手指仍旧按压状态下，造成错误选择
    const handleArrowHide = () => {
        if (touch) {
            // 先阻塞选择
            window.clearTimeout(selectTimeoutRef.current);
            setBlocakSelection(true);

            // 然后过400毫秒取消选择阻塞
            selectTimeoutRef.current = window.setTimeout(() => {
                setBlocakSelection(false);
            }, 400);
        }
    };

    return (
        <>
            {/** 参考元素 */}
            <button
                {...getReferenceProps({
                    // 当移动的事件类型为鼠标时，修改触摸状态为false
                    onPointerMove({ pointerType }) {
                        if (pointerType === "mouse") {
                            setTouch(false);
                        }
                    },
                    // 当触摸参考元素时，将触摸状态修改为true
                    onTouchStart() {
                        setTouch(true);
                    },
                })}
                className={styles.button}
                // 一个指定参考元素的函数
                ref={refs.setReference}>
                {options[selectedIndex].label}
            </button>
            {/** 创建一个悬浮元素的portal，由于当前并没有指定节点，所以默认会渲染到document.body */}
            <FloatingPortal>
                {/** 根据情况有条件展开 */}
                {open && (
                    // 提供一个覆盖元素并设置基础的样式，这里将设置非触摸设备下，展开时覆盖元素将屏蔽`body`的滚动条
                    <FloatingOverlay lockScroll={!touch} style={{ zIndex: 3000 }}>
                        {/**
                         * 提供一个聚焦管理，用于控制焦点陷阱，这里需要传入`useFloating`提供的`context`
                         *  - model为false指的是在交互过程中，浮动元素（弹出框或其他UI组件）不会阻止用户与页面的其他部分进行交互。
                         *  - 用户可以自由地在页面的任何部分点击，不会被限制在一个特定的区域内。
                         *  - 与此相对应的是模态行为，也就是说，当这个弹出框出现的时候，用户的交互会被限制在这个弹出框内，不能点击弹出框以外的其他地方。
                         *  - 当model为false时，指的是在React组件树中，浮动元素应该在引用元素的后面进行渲染。
                         *  - 虽然浮动元素在React树中渲染的位置通常在引用元素后面，但我们还可以通过Portal机制来改变它的挂载位置。
                         * ----
                         * initialFocus：
                         *  - 这里传入-1，则表示不聚焦任何选项
                         *  - 可以传入tabbable的索引或者是通过ref聚焦指定选项
                         *  - 如果内部没有可以Tab的元素，那么焦点就回落到浮动元素本身上。这个特性保证了在鼠标点击打开浮动元素后，通过箭头键进行导航的键盘操作能正常工作。
                         */}
                        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
                            <div
                                // 一个指定浮动元素的函数
                                ref={refs.setFloating}
                                style={{
                                    left: x ?? 0,
                                    position: strategy,
                                    top: y ?? 0,
                                }}>
                                <div
                                    {...getFloatingProps({
                                        // 在滚动容器中点击鼠标右键时，阻拦浏览器默认行为
                                        onContextMenu(e) {
                                            e.preventDefault();
                                        },
                                        // 当滚动容器发生滚动的时候，更新`scrollTop`，用于刷新悬浮元素中的箭头展示状态
                                        onScroll({ currentTarget }) {
                                            setScrollTop(currentTarget.scrollTop);
                                        },
                                    })}
                                    className={styles.container}
                                    ref={scrollRef}>
                                    {options.map(({ label, value }, i) => (
                                        <SelectItem
                                            {...getItemProps({
                                                // 完成点击后，如果允许下拉框选择的情况下，设置选中的索引并关闭悬浮元素
                                                // 允许不同设备在选择后触发`onClick`
                                                onClick() {
                                                    if (allowSelectRef.current) {
                                                        setSelectedIndex(i);
                                                        setOpen(false);
                                                    }
                                                },
                                                // 按下键盘后，允许下拉框选择
                                                onKeyDown() {
                                                    allowSelectRef.current = true;
                                                },
                                                /**
                                                 * 按键松开后，在`onClick`之前触发，只有触摸设备才能执行
                                                 *  - `allowMouseUpRef.current`只有初始和每次关闭的时候为`true`
                                                 *  - 而在`onMouseUp`前会经过`onTouchStart`检查设置为`false`
                                                 *  - 所以这个监听处理对象只针对触摸设备
                                                 * ----
                                                 *  - 注意的是，当悬浮元素中的箭头消失的时候会回调`handleArrowHide`
                                                 *  - 从而避免了列表选项立即选择
                                                 */
                                                onMouseUp() {
                                                    if (!allowMouseUpRef.current) return;

                                                    // 在允许选择的情况下，处理和`onClick`一样的事
                                                    // 会重复设置，但由于状态一致，所以不会产生额外的副作用
                                                    if (allowSelectRef.current) {
                                                        setSelectedIndex(i);
                                                        setOpen(false);
                                                    }

                                                    // On touch devices, prevent the element from
                                                    // immediately closing `onClick` by deferring it
                                                    // 结束`selectTimeoutRef`此前的动画，并再次异步启用允许点击，用于延迟`onClick`
                                                    // 触摸设备也有`onmouseup`事件：https://codepen.io/levi0001/pen/MWxNmRJ?editors=1111
                                                    window.clearTimeout(selectTimeoutRef.current);
                                                    selectTimeoutRef.current = window.setTimeout(() => {
                                                        allowSelectRef.current = true;
                                                    });
                                                },
                                                // 通过触摸发起事件，设置为非鼠标设备并允许下拉框选择
                                                onTouchStart() {
                                                    allowMouseUpRef.current = false;
                                                    allowSelectRef.current = true;
                                                },
                                            })}
                                            // Prevent immediate selection on touch devices when
                                            // pressing the ScrollArrows
                                            disabled={blockSelection}
                                            isActive={i === activeIndex}
                                            isSelected={i === selectedIndex}
                                            key={i}
                                            prefixCls={cls}
                                            value={value}
                                            ref={node => {
                                                listRef.current[i] = node;
                                                listContentRef.current[i] = label?.toString() || null;
                                            }}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </div>
                                {["down", "up"].map(dir => (
                                    <ScrollArrow
                                        dir={dir === "down" ? "down" : "up"}
                                        innerOffset={innerOffset}
                                        isPositioned={isPositioned}
                                        key={dir}
                                        prefixCls={cls}
                                        scrollRef={scrollRef}
                                        scrollTop={scrollTop}
                                        onHide={handleArrowHide}
                                        onScroll={handleArrowScroll}
                                    />
                                ))}
                            </div>
                        </FloatingFocusManager>
                    </FloatingOverlay>
                )}
            </FloatingPortal>
        </>
    );
};

export interface MacSelectProps {
    defaultValue?: number;
    options?: SelectProps["options"];
    prefixCls?: string;
    value?: number;
}

export default MacSelect;
