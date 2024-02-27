import { FC } from "react";
import useGlobalStyles from "../../globalWrapper";
import GlobalStyle from "./GlobalStyle";
import GlobalToken from "./GlobalToken";

const GolbalStyleApp: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <>
            <div className={styles.wraper}>
                <h2>
                    <code>createGlobalStyle</code>
                </h2>
                <GlobalStyle />
            </div>
            <div className={styles.wraper}>
                <h2>
                    <code>createGlobalStyle</code>结合 <code>antd</code> 的 <code>token</code> 使用
                </h2>
                <GlobalToken />
            </div>
        </>
    );
};

export default GolbalStyleApp;
