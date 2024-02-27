import styled from "@emotion/styled";
import { Divider, Space } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../../globalWrapper";
import App from "./app";

const Container = styled(Space)`
    background-color: ${p => p.theme.colorBgLayout};
    padding: 40px;
`;

const ProviderTheme: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>useTheme</code>
            </h2>
            <Container align="center" size={24} split={<Divider type="vertical" />}>
                <ThemeProvider theme={{ token: { colorPrimary: "#363eba" } }}>
                    <App title="包裹 ThemeProvider" tokenName="colorPrimary" />
                </ThemeProvider>
                <App title="未包裹 ThemeProvider 会显示默认值" tokenName="colorPrimary" />
            </Container>
            <div>
                <p>
                    这里没有按照官网案例通过<code>useTheme</code> + <code>styles</code>
                    属性，来设置样式。而是按照真实的开发环境将<code>useTheme</code>获取到的值通过<code>props</code>
                    传递给<code>createStyles</code>。
                </p>
                <p>
                    样式中需要用到的<code>token</code>通过<code>createStyles</code>去获取，而在组件内
                    <code>useTheme</code>只用来展示拿到的值，并根据实际操作修正了TS体操姿势。
                </p>
            </div>
        </div>
    );
};

export default ProviderTheme;
