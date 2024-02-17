import { MappingAlgorithm, ThemeProvider } from "antd-style";
import { FC } from "react";
import { getClayStylish, getClayToken } from "./theme";
import { ThemeConfig, theme } from "antd";
import { Wrapper } from "../components";
import useGlobalStyles from "../global";
import ClayApp from "./ClayApp";

const customDarkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
    const mergeToken = theme.darkAlgorithm(seedToken, mapToken);
    return {
        ...mergeToken,

        // Layout 颜色
        colorBgLayout: "rgba(42, 51, 68, 1)",
    };
};

const darkThemeConfig: ThemeConfig = {
    algorithm: [customDarkAlgorithm],
    token: { borderRadius: 2 },
};

const Claybtn: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>黏土风 UI</h2>
            <ThemeProvider
                themeMode="auto"
                theme={appearance => (appearance === "dark" ? darkThemeConfig : undefined)}
                customToken={getClayToken}
                customStylish={getClayStylish}>
                <Wrapper>
                    <ClayApp />
                </Wrapper>
            </ThemeProvider>
            <div>
                <p>
                    在这个例子中增加了<code>stylish</code>和<code>customStylish</code>
                    ，其意义在于创建一个可以被复用的的样式，它在理念上会和 <code>tailwindcss</code> 比较接近
                </p>
                <p>
                    除此之外这个例子还复习了：主题定制算法
                    <code>darkThemeConfig</code>、通过<code>ThemeProvider</code>向<code>emotion styled</code>传递
                    <code>token</code>，见组件<code>Wrapper</code>
                </p>
            </div>
        </div>
    );
};

export default Claybtn;
