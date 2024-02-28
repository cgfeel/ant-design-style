import { Button } from "antd";
import { StyleProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import Text from "./Text";

const ContainerBody: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>修改 container</h2>
            <StyleProvider container={document.body}>
                <Text tips="样式将插入在 body 节点" />
                <Button>按钮</Button>
            </StyleProvider>
            <p>通过这个方法，也可以将样式发送到其他与当前节点不相关的节点下</p>
        </div>
    );
};

export default ContainerBody;
