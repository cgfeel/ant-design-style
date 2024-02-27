import { css } from "@emotion/css";
import { App, Divider, Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const appScopeStyle = css`
    @font-face {
        font-family: "Rocher";
        src:
            url("/RocherColorGX.woff2") format("woff2"),
            url("/RocherColorGX.woff") format("woff");
    }
    .custom-button {
        font-family: "Rocher";
        font-size: 24px;
        padding: 24px;
    }
`;

const AppContainer: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>添加容器作用域样式</h2>
            <Flex vertical>
                <div className="custom-button">Out App Container Custom Button</div>
                <Divider />
                <ThemeProvider>
                    <App className={appScopeStyle}>
                        <div className="custom-button">In App Container Custom Button</div>
                    </App>
                </ThemeProvider>
            </Flex>
            <div>
                <p>
                    和上面覆盖默认链接样式一样，采用<code>ThemeProvider</code>+<code>App</code>添加作用域，除此之外
                    <code>App</code>组件允许通过<code>className</code>添加自定义作用域的样式
                </p>
            </div>
        </div>
    );
};

export default AppContainer;
