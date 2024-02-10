import { ThemeProvider } from "antd-style";
import { FC } from "react";
import App from "./App";
import useStyles from "../../style";

const CustomApp: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>通过函数方式调用</h2>
            <ThemeProvider
                customToken={({ isDarkMode, token }) => ({
                    customColor: isDarkMode ? token.colorWarning : token.colorPrimary,
                    customHeight: 64,
                })}>
                <App />
            </ThemeProvider>
        </div>
    );
};

export default CustomApp;
