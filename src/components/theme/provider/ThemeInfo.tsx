import { Divider, Flex, Typography } from "antd";
import { useThemeMode } from "antd-style";
import { FC, ReactNode } from "react";

const { Text } = Typography;

const ThemeInfo: FC<ThemeInfoProps> = ({ extra }) => {
    const { appearance, browserPrefers, themeMode } = useThemeMode();
    return (
        <Flex align="center" justify="space-between">
            <Flex align="center">
                <Text type="secondary">主题模式：</Text>
                {themeMode}
                <Divider type="vertical" />
                <Text type="secondary">外观模式：</Text>
                {appearance}
                <Divider type="vertical" />
                <Text type="secondary">浏览器外观：</Text>
                {browserPrefers}
            </Flex>
            {extra}
        </Flex>
    );
};

export interface ThemeInfoProps {
    extra?: ReactNode;
}

export default ThemeInfo;
