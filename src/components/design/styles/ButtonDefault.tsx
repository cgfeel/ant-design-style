import { FormDemoToken } from "./stylesInstance";
import { FC } from "react";
import BaseBtns, { BaseBtnsProps } from "./BaseBtns";
import { createStyles } from "antd-style";

// https://github.com/ant-design/antd-style/commit/b394d9e9cdac7dd27df31463b808337586a00409
declare module "antd-style" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface CustomToken extends FormDemoToken {}
}

const useStyles = createStyles(({ prefixCls, token, css, cx }, { useInstance }: StylesProps) => {
    const prefix = `${useInstance ? prefixCls : "my"}-btn`;
    return {
        container: cx(
            prefix,
            css`
                &.${prefix} {
                    background: unset;
                    border: unset;
                    border-radius: 6px;
                    cursor: pointer;
                    padding: 6px 16px;
                }
            `,
        ),
        default: cx(
            `${prefix}-default`,
            css`
                &.${prefix}-default {
                    background-color: ${token.colorBgContainer};
                    border: 1px solid ${token.colorBorder};
                    color: ${token.colorTextSecondary};
                }
            `,
        ),
        filled: cx(
            `${prefix}-filled`,
            css`
                &.${prefix}-filled {
                    background-color: ${token.colorPrimaryBg};
                    color: ${token.colorPrimary};
                    :hover {
                        background-color: ${token.colorPrimaryBgHover};
                    }
                }
            `,
        ),
        primary: cx(
            `${prefix}-primary`,
            css`
                &.${prefix}-primary {
                    background-color: ${useInstance ? token.primaryColor : token.colorPrimary};
                    color: ${token.colorTextLightSolid};
                    :hover {
                        background: ${token.colorPrimaryHover};
                    }
                }
            `,
        ),
        text: cx(
            `${prefix}-text`,
            css`
                &.${prefix}-text {
                    color: ${token.colorTextSecondary};
                    :hover {
                        background: ${token.colorFillTertiary};
                        color: ${token.colorText};
                    }
                }
            `,
        ),
    };
});

const ButtonDefault: FC<ButtonGroupProps> = ({ useInstance, ...props }) => {
    const { styles, cx } = useStyles({ useInstance });
    return <BaseBtns {...props} styles={styles} cx={cx} />;
};

interface StylesProps {
    useInstance?: boolean;
}

export interface ButtonGroupProps extends Pick<BaseBtnsProps, "className" | "list" | "title">, StylesProps {}

export default ButtonDefault;
