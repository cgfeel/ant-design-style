import { Flex } from "antd";
import { FC, MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { useStyles } from "./style";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

// padding for .scrollTop for when to show the scroll arrow
const SCROLL_ARROW_PADDING = 10;

const shouldShowArrow = (scrollRef: ScrollArrowProps["scrollRef"], dir: ScrollArrowProps["dir"]) => {
    if (scrollRef.current) {
        const { clientHeight, scrollHeight, scrollTop } = scrollRef.current;
        if (dir === "down") {
            return scrollTop <= scrollHeight - clientHeight - SCROLL_ARROW_PADDING;
        }
        if (dir === "up") {
            return scrollTop >= SCROLL_ARROW_PADDING;
        }
    }
    return false;
};

const ScrollArrow: FC<ScrollArrowProps> = ({
    dir,
    innerOffset,
    isPositioned,
    prefixCls,
    scrollRef,
    scrollTop,
    onHide,
    onScroll,
}) => {
    const [show, setShow] = useState(false);
    const { styles } = useStyles({
        prefixCls: `${prefixCls}-scroll-arrow`,
        show,
    });

    const frameRef = useRef(-1);
    const ref = useRef<HTMLDivElement>(null);

    // 箭头当前状态
    const statusRef = useRef<"active" | "idle">("idle");

    // Updates the visibility state of the arrow when necessary.
    // `useLayoutEffect`通过：`innerOffset`、`scrollTop`更新展示状态，它们不参与内部更新，只负责触发副作用
    // 除此之外，在进入箭头区域后，会调用`handlePointerEnter`更新展示状态，见下方
    useLayoutEffect(() => {
        if (isPositioned && statusRef.current !== "active") {
            setShow(shouldShowArrow(scrollRef, dir));
        }
    }, [dir, isPositioned, scrollRef, statusRef, setShow, innerOffset, scrollTop]);

    // While pressing the scroll arrows on touch divices,
    // prevent selection once they disappear (lift finger)
    // 依赖对象：`scrollTop`，它们不参与内部更新，只负责触发副作用
    useLayoutEffect(() => {
        if (!show && statusRef.current === "active") {
            onHide();
        }
        // Assuming `onHide` does not change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, onHide, scrollTop]);

    // 进入箭头区域时触发，通过不间断的动画，上下滚动下拉列表
    const handlePointerEnter = () => {
        statusRef.current = "active";
        let prevNow = Date.now();

        function frame() {
            if (scrollRef.current) {
                const { clientHeight, scrollHeight, scrollTop } = scrollRef.current;
                const currentNow = Date.now();
                const msElapsed = currentNow - prevNow;

                prevNow = currentNow;

                const pixelsToScroll = msElapsed / 2;
                const remainingPixels = dir === "up" ? scrollTop : scrollHeight - clientHeight - scrollTop;
                const scrollRemaining =
                    dir === "up"
                        ? scrollTop - pixelsToScroll > 0
                        : scrollTop + pixelsToScroll < scrollHeight - clientHeight;

                // 将每次计算结果通过`onScroll`这个props传回去
                onScroll(
                    dir === "up"
                        ? Math.min(pixelsToScroll, remainingPixels)
                        : Math.max(-pixelsToScroll, -remainingPixels),
                );

                if (scrollRemaining) {
                    frameRef.current = requestAnimationFrame(frame);
                } else {
                    setShow(shouldShowArrow(scrollRef, dir));
                }
            }
        }

        // 将`requestAnimationFrame`返回的ID绑定在`frameRef.current`来取消动画
        // 这里取消的目的是为了防止重复调用`handlePointerEnter`造成动画累加
        cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(frame);
    };

    /**
     * 离开箭头区域时触发，停止动画从而停止下拉列表滚动，有两种方式离开
     *  1. 主动离开
     *  2. 被动离开
     *    - 通过`useLayoutEffect`或`handlePointerEnter`设置`show`的状态
     *    - 从而改变样式`visibility: hidden`，使其被动触发`handlePointerLeave`
     */
    const handlePointerLeave = () => {
        statusRef.current = "idle";
        cancelAnimationFrame(frameRef.current);
    };

    return (
        <Flex
            align="center"
            justify="center"
            className={styles.container}
            data-dir={dir}
            ref={ref}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            aria-hidden>
            {dir === "up" ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </Flex>
    );
};

export interface ScrollArrowProps {
    dir: "down" | "up"; // 方向
    innerOffset: number; // 更新展示状态，它们不参与内部更新，只负责触发副作用
    isPositioned: boolean; // 是否已装载参考元素和浮动元素
    prefixCls: string; // 样式前缀

    // 滚动元素容器的ref，根据容器的高度和内容的高度决定是否展示箭头
    scrollRef: MutableRefObject<HTMLDivElement | null>;
    scrollTop: number; // 更新展示状态，它们不参与内部更新，只负责触发副作用
    onHide: () => void; // 在决定隐藏下拉选项里的箭头的时候，在修改箭头状态为`idle`之前触发当前回调
    onScroll: (amount: number) => void; // 下拉列表中触点(touch and mouse)进入上下箭头时触发的回调函数
}

export { SCROLL_ARROW_PADDING };

export default ScrollArrow;
