import { Space } from "antd";
import { FullToken, createStyles, useTheme } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ token, css }, tokenColor: ValueOf<FullToken>) => ({
    box: css`
        background-color: ${token.colorFillTertiary};
        border-radius: ${token.borderRadius};
        padding: 4px 8px;
        & .dot {
            background-color: ${tokenColor || "black"};
            border-radius: 16px;
            height: 16px;
            width: 16px;
        }
        & code {
            background-color: transparent;
            border: none;
            padding: inherit;
            margin: inherit;
        }
    `,
    tips: css`
        color: ${token.colorTextLabel};
        font-size: 12px;
        margin-left: 8px;
    `,
    title: css`
        color: ${token.colorTextPlaceholder};
        font-size: 12px;
    `,
}));

const App: FC<AppProps> = ({ title, tokenName = "colorPrimary" }) => {
    const token = useTheme();
    const tokenColor = token[tokenName];

    const { styles } = useStyles(tokenColor);
    return (
        <Space direction="vertical" size={8}>
            <div className={styles.title}>{title}</div>
            <Space align="center" className={styles.box}>
                <div className="dot"></div>
                <code>{tokenColor || "None"}</code>
            </Space>
            <div className={styles.tips}>{tokenName || "-"}</div>
        </Space>
    );
};

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module "antd-style" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface CustomToken extends NewToken {}
}

type ValueOf<T> = T[keyof T];

export interface AppProps {
    title: string;
    tokenName?: keyof FullToken;
}

export interface NewToken {
    customBrandColor: string;
}

export default App;
