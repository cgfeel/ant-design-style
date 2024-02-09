import { App, Flex } from "antd";
import { useTheme } from "antd-style";
import { FC, PropsWithChildren } from "react";

const Demo: FC<PropsWithChildren<DemoProps>> = ({ children }) => {
    const theme = useTheme();
    return (
        <App>
            <Flex
                gap={theme.paddingLG}
                style={{
                    background: theme.colorBgLayout,
                    padding: `${theme.paddingXL}px ${theme.paddingLG}px`,
                }}
                vertical>
                {children}
            </Flex>
        </App>
    );
};

export interface DemoProps {}

export default Demo;
