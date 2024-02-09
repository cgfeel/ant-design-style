import { ThemeProvider } from "antd-style";
import { FC } from "react";
import ThemeControler from "../../provider/ThemeControler";
import useStyles from "../../style";
import Controller from "./Controller";

const PickTheme: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                受控模式：使用<code>useThemeMode</code>
            </h2>
            <ThemeProvider defaultThemeMode="auto">
                <ThemeControler extra={<Controller />} />
            </ThemeProvider>
        </div>
    );
};

export default PickTheme;
