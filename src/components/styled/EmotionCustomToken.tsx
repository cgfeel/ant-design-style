import { ThemeContext } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "antd";
import { ThemeProvider, createStyles, css } from "antd-style";
import { FC } from "react";

declare module "@emotion/react" {
    export interface Theme {
        colorPrimary: string;
        border: string;
        borderRadius: number;
        text: string;
    }
}

const customToken = {
    border: "cyan",
    borderRadius: 8,
    text: "white",
};

const StyledButton = styled.button`
    background-color: ${p => p.theme.colorPrimary};
    border: 4px solid ${p => p.theme.border};
    border-radius: ${p => p.theme.borderRadius}px;
    color: ${p => p.theme.text};
    padding: 8px;
`;

const useStyles = createStyles(({ token }) => ({
    flexBox: css`
        background-color: ${token.colorBgLayout};
        padding: 24px;
    `,
    wraper: {
        marginBottom: 100,
        code: {
            backgroundColor: "#f2f2f2",
            border: "1px solid #ddd",
            padding: 4,
            margin: "0 2px",
        },
    },
}));

const EmotionCustomToken: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>emotion</code>与<code>ThemeProvider</code>集成
            </h2>
            <Flex gap={24}>
                <ThemeProvider customToken={customToken} styled={{ ThemeContext }}>
                    <StyledButton>注入 @emotion/react Provider</StyledButton>
                </ThemeProvider>
                <ThemeProvider customToken={{ ...customToken, border: "green" }}>
                    <StyledButton>只包裹 ThemeProvider</StyledButton>
                </ThemeProvider>
                <StyledButton>不包裹 ThemeProvider</StyledButton>
            </Flex>
            <div>
                <p>
                    <code>antd-style</code> 内置了 <code>@emotion/react</code> 的 <code>ThemeContext</code>
                    ，所以默认可以响应自定义 <code>Token</code>
                </p>
                <p>
                    尽管如此，<code>@emotion/react</code>和<code>antd-style</code>在自定义<code>token</code>
                    的时候都需要通过
                    <code>declare</code>重新扩展<code>Token</code>类型
                </p>
            </div>
        </div>
    );
};

export default EmotionCustomToken;
