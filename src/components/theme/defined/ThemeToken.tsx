import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useStyles from "../style";
import ThemeControler from "../provider/ThemeControler";

const ThemeToken: FC = () => {
    const { styles } = useStyles();

    return (
        <div className={styles.wraper}>
            <h2>通过 token 设置 theme</h2>
            <ThemeProvider
                theme={{
                    token: {
                        colorPrimary: "#ff5a00",
                    },
                }}>
                <ThemeControler />
            </ThemeProvider>
        </div>
    );
};

export default ThemeToken;
