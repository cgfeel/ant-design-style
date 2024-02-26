import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, cx }, prefixCls: string) => ({
    active: cx(
        `${prefixCls}-item-active`,
        css`
            background-color: ${token.colorFillTertiary};
        `,
    ),
    item: cx(
        `${prefixCls}-item`,
        css`
            all: unset;
            background-color: transparent;
            border-radius: 5px;
            box-sizing: inherit;
            color: ${token.colorTextBase};
            display: block;
            font-weight: normal;
            line-height: 1;
            padding: 12px 10px;
            scroll-margin: 50px;
            user-select: none;
            width: 100%;
            &:hover {
                background-color: ${token.colorFillTertiary};
            }
        `
    ),
    selected: cx(
        `${prefixCls}-item-selected`,
        css`
            background-color: ${token.colorPrimaryBg};
            font-weight: bold;
            &:hover {
                background-color: ${token.colorPrimaryBgHover};
            }
        `
    ),
}));
