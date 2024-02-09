import { Button, Card, Flex, Modal, message } from "antd";
import { useTheme } from "antd-style";
import { FC } from "react";

const StaticModal = Modal._InternalPanelDoNotUseOrYouWillBeFired;
const StaticMessage = message._InternalPanelDoNotUseOrYouWillBeFired;

const ComGroup: FC = () => {
    const theme = useTheme();
    return (
        <Flex gap={theme.paddingLG} vertical>
            <Flex gap={8}>
                <Button>默认按钮</Button>
                <Button type="primary" ghost>
                    次强调按钮
                </Button>
                <Button type="primary">强调按钮</Button>
            </Flex>
            <Card>卡片效果</Card>
            <Flex gap={8}>
                <StaticModal title="成功" type="success">
                    这是一个静态化呈现的成功弹窗
                </StaticModal>
                <StaticMessage content="失败提示" type="error"></StaticMessage>
            </Flex>
        </Flex>
    );
};

export default ComGroup;
