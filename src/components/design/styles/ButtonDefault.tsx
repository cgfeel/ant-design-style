import { FC, ReactNode } from "react";
import { createStyles } from "antd-style";
import BaseBtns from "./BaseBtns";

const useStyles = createStyles(({ css, cx, token }) => {
    const prefix = `my-btn`;
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
                    background-color: ${token.colorPrimary};
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

const ButtonDefault: FC<ButtonGroupProps> = props => {
    const { styles, cx } = useStyles();
    return <BaseBtns {...props} styles={styles} cx={cx} />;
};

type ItemType = { key: "default" | "filled" | "primary" | "text"; value: ReactNode; className?: string };

export interface ButtonGroupProps {
    className: string;
    list: ItemType[];
    title: string;
}

export default ButtonDefault;
