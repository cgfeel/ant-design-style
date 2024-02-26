import { createStyles } from "antd-style";

export interface StylesProps {
    prefixCls: string;
    show?: boolean;
}

export const useStyles = createStyles(({ token, css, cx }, { prefixCls, show }: StylesProps) => ({
    container: cx(
        prefixCls,
        css`
            border-radius: 0;
            color: ${token.colorTextPlaceholder};
            cursor: default;
            font-size: 12px;
            height: 25px;
            line-height: 1;
            position: absolute;
            user-select: none;
            visibility: ${show ? 'visible' : 'hidden'};
            width: 100%;
            z-index: 1;
            &::before {
                content: '';
                display: block;
                height: 35px;
                left: 0;
                pointer-events: none;
                position: absolute;
                width: 100%;
                z-index: -1;
            }
            &[data-dir="down"] {
                bottom: 0;
                &::before {
                    background-image: linear-gradient(to top, ${token.colorBgElevated} 50%, transparent);
                    border-radius: 0 0 8px 8px;
                    left: 1px;
                    right: 1px;
                    top: -10px;
                    width: auto;
                }
            }
            &[data-dir="up"] {
                top: 0;
                &::before {
                    background-image: linear-gradient(to bottom, ${token.colorBgElevated} 50%, transparent);
                    border-radius: 8px 8px 0 0;
                    left: 1px;
                    right: 1px;
                    top: 1px;
                    width: auto;
                }
            }
        `
    ),
}));
