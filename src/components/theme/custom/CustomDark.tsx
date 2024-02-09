import { ThemeConfig, theme } from "antd";
import { MappingAlgorithm, ThemeProvider } from "antd-style";
import { FC } from "react";
import ThemeControler from "../provider/ThemeControler";

const customDarkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
    const mergeToken = theme.darkAlgorithm(seedToken, mapToken);
    return {
        ...mergeToken,
        // Layout 颜色
        colorBgLayout: "#20252b",
        // 容器颜色
        colorBgContainer: "#282c34",
        // 悬浮面板颜色
        colorBgElevated: "#32363e",
    };
};

const darkThemeConfig: ThemeConfig = {
    algorithm: [customDarkAlgorithm],
    token: { borderRadius: 2 },
};

const CustomDark: FC = () => (
    <ThemeProvider themeMode="dark" theme={appearance => (appearance === "dark" ? darkThemeConfig : undefined)}>
        <ThemeControler />
    </ThemeProvider>
);

export default CustomDark;
