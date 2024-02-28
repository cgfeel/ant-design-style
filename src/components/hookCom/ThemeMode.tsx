import { ThemeProvider } from "antd-style";
import { FC } from "react";
import ThemeControler from "./ThemeControler";
import useGlobalStyles from "../globalWrapper";

const ThemeMode: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>useThemeMode</code>
            </h2>
            <ThemeProvider themeMode="auto">
                <ThemeControler tips="themeMod：跟随浏览器" />
            </ThemeProvider>
            <ThemeProvider themeMode="light">
                <ThemeControler tips="themeMod：亮色主题" />
            </ThemeProvider>
            <ThemeProvider themeMode="dark">
                <ThemeControler tips="themeMod：暗色主题" />
            </ThemeProvider>
            <ThemeProvider appearance="auto">
                <ThemeControler tips="appearance：跟随浏览器" />
            </ThemeProvider>
            <ThemeProvider appearance="light">
                <ThemeControler tips="appearance：亮色主题" />
            </ThemeProvider>
            <ThemeProvider appearance="dark">
                <ThemeControler tips="appearance：暗色主题" />
            </ThemeProvider>
            <ul>
                <li>
                    个人习惯：获取主题信息建议通过<code>useThemeMode</code>；而<code>useTheme</code>更适合获取
                    <code>token</code>，这样做可以避免混淆
                </li>
                <li>
                    <code>themeMod</code>用于设置主题亮色、暗色或跟随浏览器，<code>appearance</code>用于定制不同的主题
                </li>
                <li>
                    举个例子，网站分别有：赤橙黄绿青蓝紫，这几个颜色，为了适应暗色和亮色不同的主题，那么
                    <code>appearance</code>就很合适
                </li>
                <li>
                    但目前<code>appearance</code>和<code>themeMod</code>不能同时受控，官方文档说明
                </li>
            </ul>
        </div>
    );
};

export default ThemeMode;
