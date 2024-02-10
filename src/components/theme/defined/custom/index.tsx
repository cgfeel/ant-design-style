import { ThemeProvider } from "antd-style";
import { FC } from "react";
import App from "./App";
import useStyles from "../../style";

const CustomToken: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>自定义 token 配置</h2>
            <ThemeProvider
                customToken={{
                    customColor: "#ff0000",
                    customHeight: 64,
                }}>
                <App />
            </ThemeProvider>
        </div>
    );
};

export default CustomToken;
