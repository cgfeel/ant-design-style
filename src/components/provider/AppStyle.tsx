import styled from "@emotion/styled";
import { App } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const Container = styled.div`
    padding: 16px;
`;

const Demo: FC = () => (
    <Container>
        <a href="https://github.com/cgfeel/ant-design-style">cgfeel/ant-design-style</a>
    </Container>
);

const AppStyle: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>无包裹链接</h2>
            <Demo />
            <h2>
                <code>ThemeProvider</code> + <code>App</code>
            </h2>
            <ThemeProvider>
                <App>
                    <Demo />
                </App>
            </ThemeProvider>
            <h2>
                <code>ThemeProvider</code>
            </h2>
            <ThemeProvider>
                <Demo />
            </ThemeProvider>
            <div>
                通过<code>ThemeProvider</code>可以采用<code>antd</code>的样式覆盖默认样式，但是由于
                <code>ThemeProvider</code>没有DOM节点，需要包裹一个<code>App</code>，或通过<code>GlobalStyle</code>
                修改全局样式，而修改全局样式则会造成全局污染
            </div>
        </div>
    );
};

export default AppStyle;
