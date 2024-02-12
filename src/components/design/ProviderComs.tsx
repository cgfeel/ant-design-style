import { Flex } from "antd";
import { FC } from "react";
import useStyles from "./style";
import ButtonDefault from "./styles/ButtonDefault";
import { ProDemoProvider } from "./styles/stylesInstance";

const ProviderComs: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>独立样式</h2>
            <Flex className={styles.flexBox} gap={24} vertical>
                <ButtonDefault
                    list={[
                        { key: "primary", value: "强调按钮" },
                        { key: "filled", value: "填充按钮" },
                        { key: "default", value: "默认按钮" },
                        { key: "text", value: "文本按钮" },
                    ]}
                    title="未提供 Provider 选择器，外部样式无法覆盖 ❌"
                />
                <ProDemoProvider themeMode="dark">
                    <ButtonDefault
                        list={[
                            { key: "primary", value: "强调按钮" },
                            { key: "filled", value: "填充按钮" },
                            { key: "default", value: "默认按钮" },
                            { key: "text", value: "文本按钮" },
                        ]}
                        title="未提供 Provider 选择器，外部样式无法覆盖 ❌"
                        useInstance={true}
                    />
                </ProDemoProvider>
            </Flex>
        </div>
    );
};

export default ProviderComs;
