import { theme } from "antd";
import { ThemeProvider } from "antd-style";
import { FC, useState } from "react";
import PickCard, { CustomAppearance } from "../../controller/PickCard";
import ThemeControler from "../../provider/ThemeControler";
import useStyles from "../../style";

const CustomAppearanceCom: FC = () => {
    const [appearance, setAppearance] = useState<CustomAppearance>();
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>自定义外观模式</h2>
            <ThemeProvider
                appearance={appearance}
                theme={(appearance: CustomAppearance) => {
                    switch (appearance) {
                        case "dark":
                            return {
                                algorithm: theme.darkAlgorithm,
                                token: { colorPrimary: "cyan" },
                            };
                        case "grey":
                            return {
                                algorithm: theme.darkAlgorithm,
                            };
                        case "light":
                            return {
                                token: { colorPrimary: "purple" },
                            };
                    }
                }}>
                <ThemeControler
                    extra={
                        <PickCard
                            options={[
                                { label: "亮色", value: "light" },
                                { label: "暗色", value: "dark" },
                                { label: "灰色", value: "grey" },
                            ]}
                            value={appearance}
                            onChange={value => setAppearance(value)}
                        />
                    }
                />
            </ThemeProvider>
            <p></p>
        </div>
    );
};

export default CustomAppearanceCom;
