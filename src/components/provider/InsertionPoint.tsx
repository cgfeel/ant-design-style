import { StyleProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import Text from "./Text";

const InsertionPoint: FC = () => {
    const firstMeta = document.getElementsByTagName("meta")[0];
    const { styles } = useGlobalStyles();

    return (
        <div className={styles.wraper}>
            <h2>修改样式注入点</h2>
            <StyleProvider insertionPoint={firstMeta}>
                <Text color="hotpink" tips="插入的 style 节点在第一个 meta 标签之后" />
            </StyleProvider>
        </div>
    );
};

export default InsertionPoint;
