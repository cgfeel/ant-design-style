import { ThemeProvider } from "antd-style";
import { FC } from "react";
import ThemeControler from "./provider/ThemeControler";
import useStyles from "./style";

const AutoTheme: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                通过<code>themeMode</code>跟随系统主题
            </h2>
            <ThemeProvider themeMode="auto">
                <ThemeControler />
            </ThemeProvider>
            <div>
                <p>
                    <code>appearance</code>描述了应用当前的外观状态。<code>themeMode</code>则用于描述控制逻辑。
                </p>
                <p>
                    也就是说<code>appearance</code>不仅仅只是<code>light</code> | <code>dark</code>
                    这两个值，还可以有更多的值
                </p>
            </div>
        </div>
    );
};

export default AutoTheme;
