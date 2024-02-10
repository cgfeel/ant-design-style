import { ThemeProvider } from "antd-style";
import { FC } from "react";
import Controller from "../controller/pick/Controller";
import ThemeControler from "../provider/ThemeControler";
import useStyles from "../style";

const ThemeAppearance: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>通过函数定义主题</h2>
            <ThemeProvider
                theme={appearance => ({
                    token: {
                        colorPrimary: appearance === "dark" ? "red" : "blue",
                    },
                })}>
                <ThemeControler extra={<Controller />} />
            </ThemeProvider>
        </div>
    );
};

export default ThemeAppearance;
