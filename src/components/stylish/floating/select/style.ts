import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, cx }, prefixCls: string) => ({
    button: cx(`${prefixCls}-button`, css`
        all: unset;
        background-color: ${token.colorBgContainer};
        border: 1px solid ${token.colorBorder};
        border-radius: ${token.borderRadius}px;
        color: ${token.colorText};
        cursor: default;
        font-size: ${token.fontSize}px;
        line-height: 1;
        padding: 12px 10px;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        &:focus-visible {
            border-color: ${token.colorPrimary};
            box-shadow: 0 0 0 2px ${token.colorPrimaryBg};
        }
        &:hover {
            background-color: ${token.colorPrimaryBg};
            border-color: transparent;
        }
    `),
    container: cx(prefixCls, css`
        background-color: ${token.colorBgElevated};
        border: 1px solid ${token.colorBorder};
        border-radius: 8px;
        box-shadow: ${token.boxShadowSecondary};
        box-sizing: border-box;
        font-size: ${token.fontSize};
        outline: 0;
        overflow-y: auto;
        overscroll-behavior: contain;
        padding: 5px;
        scrollbar-width: none;
        user-select: none;
        width: 160px;
        &::-webkit-scrollbar {
            display: none;
        }
    `),
}));
