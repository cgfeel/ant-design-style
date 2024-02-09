import { ThemeConfig, theme } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import ThemeControler from "../provider/ThemeControler";
import useStyles from "../style";
import CustomDark from "./CustomDark";

const thmemeConfig: ThemeConfig = {
    token: { colorPrimary: "#000000" },
    algorithm: theme.compactAlgorithm,
};

const ThemeCustom: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>定制主题：修改主色与紧凑模式 </h2>
            <ThemeProvider theme={thmemeConfig}>
                <ThemeControler />
            </ThemeProvider>
            <h2>定制主题：自定义暗色风格</h2>
            <CustomDark />
            <p>
                <code>ThemeConfig</code>中<code>algorithm</code>接受一组<code>MappingAlgorithm</code>类型的数组
            </p>
            <p>
                每个<code>MappingAlgorithm</code>函数接受两个参数<code>seedToken</code>和<code>mapToken</code>
                ，具体说明见：
                <a href="https://ant-design.antgroup.com/docs/react/customize-theme-cn#%E5%9F%BA%E6%9C%AC%E7%AE%97%E6%B3%95algorithm">
                    基本算法（algorithm）
                </a>
            </p>
            <p>
                <code>algorithm</code>也可以接受一个<code>MappingAlgorithm</code>
                类型的函数，无论是一组算法还是单个函数，最终会一层一层遍历并返回为一个<code>MapToken</code>对象
            </p>
        </div>
    );
};

export default ThemeCustom;
