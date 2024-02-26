import { Divider, Flex, Select } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import { fruits } from "./data";
import MacSelect from "./select";

const useStyles = createStyles(
    ({ token, css }) => css`
        background-color: ${token.colorBgLayout};
        padding: 24px;
    `,
);

const Demo: FC = () => {
    const { styles } = useStyles();
    return (
        <Flex align="center" gap={16} justify="center" className={styles}>
            macOS：
            <MacSelect defaultValue={4} options={fruits} />
            <Divider type="vertical" />
            antd：
            <Select defaultValue="Apple" popupMatchSelectWidth={100} options={fruits} />
        </Flex>
    );
};

export default Demo;
