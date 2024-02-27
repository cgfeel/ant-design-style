import { Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import ThemeControler from "../theme/provider/ThemeControler";

const Appearance: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>appearance</code>
            </h2>
            <Flex>
                <div style={{ flex: "auto" }}>
                    <ThemeProvider appearance="light">
                        <ThemeControler />
                    </ThemeProvider>
                </div>
                <div style={{ flex: "auto" }}>
                    <ThemeProvider appearance="dark">
                        <ThemeControler />
                    </ThemeProvider>
                </div>
            </Flex>
        </div>
    );
};

export default Appearance;
