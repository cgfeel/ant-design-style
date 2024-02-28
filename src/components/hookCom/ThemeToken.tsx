import { App, Divider } from "antd";
import { ThemeProvider, createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import DemoApp from "../provider/usetheme/app";

const useStyles = createStyles(({ token, css }) => ({
    container: css`
        background-color: ${token.colorBgLayout};
        padding: ${token.paddingLG}px;
    `,
    demo: css`
        background-color: ${token.colorBgLayout};
        border-radius: 12px;
        padding: ${token.paddingLG}px ${token.paddingSM}px;
    `,
}));

const DarkTheme: FC = () => {
    const { styles } = useStyles();
    return (
        <App>
            <div className={styles.demo}>
                <div>ThemeProvider & 暗色模式</div>
                <DemoApp title="colorPrimary" />
            </div>
        </App>
    );
};

const ThemeToken: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>useTheme</code>
            </h2>
            <div className={styles.container}>
                <ThemeProvider appearance="dark">
                    <DarkTheme />
                </ThemeProvider>
                <Divider />
                <div>ThemeProvider & token 值</div>
                <ThemeProvider theme={{ token: { colorPrimary: "#55dc5b" } }}>
                    <DemoApp title="colorPrimary" />
                </ThemeProvider>
                <Divider />
                <div>未包裹，使用默认值</div>
                <DemoApp title="colorPrimary" />
            </div>
            <p>
                在这个例子中，也可以通过最外层的样式<code>container</code>和组件<code>ThemeProvider</code>中的样式
                <code>demo</code>做比较，它们都是用了<code>token.colorBgLayout</code>
                作为背景色，且都来自同一个<code>useStyles</code>，由于组件
                <code>ThemeProvider</code>设置<code>{'appearance="dark"'}</code>，展示的背景颜色不一样
            </p>
        </div>
    );
};

export default ThemeToken;
