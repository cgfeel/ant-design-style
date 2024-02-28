import { App, Flex } from "antd";
import { createStyles, useTheme } from "antd-style";
import { FC, PropsWithChildren } from "react";

const useStyles = createStyles(
    ({ token, css }) => css`
        background-color: ${token.colorBgLayout};
        padding: ${token.paddingXL}px ${token.paddingLG}px;
    `,
);

const Demo: FC<PropsWithChildren<DemoProps>> = ({ children }) => {
    const { styles } = useStyles();
    const theme = useTheme();
    return (
        <App>
            <Flex gap={theme.paddingLG} className={styles} vertical>
                {children}
            </Flex>
        </App>
    );
};

export interface DemoProps {}

export default Demo;
