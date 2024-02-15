import { createStyles } from "antd-style";

const useStyles = createStyles(({ prefixCls, token, css, cx, }) => {
    const prefix = `${prefixCls}-pro-card-statistic`;
    return css`
        &.${prefix} {
            display: flex;
            font-size: ${token.fontSize}px;
        }
        .${prefix} {
            & + & {
                margin-top: 4px;
            }
            &-content {
                width: 100%;
            }
            &-description {
                width: 100%;
            }
            &-icon {
                margin-right: 16px;
            }
            &-layout-horizontal {
                display: flex;
                justify-content: space-between;
                .${prefixCls}-statistic-content-value {
                    font-size: 500;
                }
                .${prefixCls}-statistic-title {
                    margin-bottom: 0;
                }
                .${prefixCls}-statistic-content,
                .${prefixCls}-statistic-content-prefix,
                .${prefixCls}-statistic-content-suffix,
                .${prefixCls}-statistic-content-value-decimal,
                .${prefixCls}-statistic-title {
                    font-size: ${token.fontSize}px;
                }
            }
            &-layout-inline {
                color: ${token.colorTextSecondary};
                display: inline-flex;
                ${prefixCls}-statistic-content {
                    color: ${token.colorTextSecondary};
                }
                ${prefixCls}-statistic-title {
                    margin-bottom: 0;
                    margin-right: 6px;
                }
                .${prefixCls}-statistic-content,
                .${prefixCls}-statistic-content-prefix,
                .${prefixCls}-statistic-content-suffix,
                .${prefixCls}-statistic-content-value-decimal,
                .${prefixCls}-statistic-title {
                    font-size: ${token.fontSizeSM}px;
                }
            }
            &-tip {
                margin-left: 4px;
            }
            &-trend-icon {
                border-bottom: 9px solid #000;
                border-left: 3.5px solid transparent;
                border-right: 3.5px solid transparent;
                height: 0;
                width: 0;
                &-down {
                    transform: rotate(0deg);
                }
                &-up {
                    transform: rotate(0deg);
                }
            }
            &-trend-down {
                .${prefixCls}-statistic-content {
                    color: #f5222d;
                    .${prefix}-trend-icon {
                        border-bottom-color: #f5222d;
                    }
                }
            }
            &-trend-up {
                .${prefixCls}-statistic-content {
                    color: #f5222d;
                    .${prefix}-trend-icon {
                        border-bottom-color: #f5222d;
                    }
                }
            }
            &-wrapper {
                display: flex;
                width: 100%;
            }
            .${prefix}-statistic-title {
                color: ${token.colorText};
            }
        }
    `;
});

export default useStyles;
