import { DefaultOptionType } from "antd/es/select";
import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import { useStyles } from "./styles";

const SelectItem = forwardRef<HTMLButtonElement, PropsWithChildren<SelectItemProps>>(
    ({ children, disabled, isActive, isSelected, prefixCls, value, ...props }, ref) => {
        const { styles, cx } = useStyles(prefixCls);
        /**
         * tabIndex:
         *  - button通过`tabIndex={-1}`禁止tab选择，但允许聚焦
         *  - `tabIndex={0}`表示可聚焦、可tab选择
         *  - 如果是选择元素是div，且没有设置`tabIndex`则不可以聚焦也不可tab选择
         *  - 在官方建议通过选中的索引聚焦`<div tabIndex={activeIndex === index ? 0 : -1} />`
         */
        return (
            <button
                {...props}
                role="option"
                tabIndex={-1}
                aria-selected={isSelected}
                className={cx(styles.item, {
                    [styles.active]: isActive,
                    [styles.selected]: isSelected,
                })}
                disabled={disabled}
                key={value}
                ref={ref}>
                {children}
            </button>
        );
    },
);

if (process.env.NODE_ENV !== "production") {
    SelectItem.displayName = "SelectItem";
}

export interface SelectItemProps extends Pick<DefaultOptionType, "value"> {
    prefixCls: string; // 样式前缀
    disabled: boolean; // 是否禁止选择
    isActive: boolean; // 是否选中
    isSelected?: boolean; // 是否已选择
    ref?: ForwardedRef<HTMLButtonElement>; // 仅用于装载下拉项后，挂载`listRef`和`listContentRef`
}

export default SelectItem;
