import styled from "@emotion/styled";
import { Button, Checkbox, ConfigProvider, Flex, Popover, theme } from "antd";
import { FC } from "react";
import useGlobalStyles from "./global";

const CustomDiv = styled.div`
    width: 300px;
    > div:first-of-type {
        margin-bottom: 24px;
    }
`;

const PopoverCustom: FC = () => {
    const { styles } = useGlobalStyles();
    const { token } = theme.useToken();
    return (
        <div className={styles.wraper}>
            <h2>
                基于 <code>ConfigProvider</code> 覆写 <code>antd</code> 的样式
            </h2>
            <ConfigProvider
                theme={{
                    components: {
                        Button: { colorPrimary: token.blue7 },
                        Checkbox: {
                            colorPrimary: token.blue7,
                            colorText: token.colorTextLightSolid,
                        },
                        Popover: { colorText: token.colorTextLightSolid },
                    },
                }}>
                <Popover
                    color="blue"
                    placement="right"
                    trigger="hover"
                    arrow={{ pointAtCenter: true }}
                    content={
                        <CustomDiv>
                            <div>antd V5 的 Popup ，结合 结合 组件级 Token，可以非常简单地实现自定义样式</div>
                            <Flex justify="space-between" gap={8}>
                                <Checkbox checked>不再显示</Checkbox>
                                <Button size="small" type="primary">
                                    我知道了
                                </Button>
                            </Flex>
                        </CustomDiv>
                    }
                    open>
                    antd v5 的组件级自定义样式，轻松又便捷
                </Popover>
            </ConfigProvider>
        </div>
    );
};

export default PopoverCustom;
