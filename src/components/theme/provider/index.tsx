import { Flex, Segmented } from "antd";
import { ThemeAppearance, ThemeProvider } from "antd-style";
import { FC, useState } from "react";
import useStyles from "../style";
import ThemeControler from "./ThemeControler";

const options: OptionItem[] = [
    { label: "亮色", value: "light" },
    { label: "暗色", value: "dark" },
];

const SelectTheme: FC = () => {
    const [appearance, setTheme] = useState<ThemeAppearance>("light");
    const { styles } = useStyles();

    return (
        <div className={styles.wraper}>
            <h2>
                通过<code>appearance</code>设置主题
            </h2>
            <Flex gap={8}>
                <Flex align="center" justify="center" flex={1}>
                    <Segmented options={options} onChange={val => setTheme(val)} />
                </Flex>
                <Flex flex={8} vertical>
                    <ThemeProvider appearance={appearance}>
                        <ThemeControler />
                    </ThemeProvider>
                </Flex>
            </Flex>
        </div>
    );
};

type OptionItem = {
    label: string;
    value: ThemeAppearance;
};

export default SelectTheme;
