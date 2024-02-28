import { StyleProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import Text from "./Text";

const Speedy: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>开启 speedy 极速模式</h2>
            <StyleProvider speedy>
                <Text tips="开启 speedy 模式后，style 标签中将不存在具体样式" />
            </StyleProvider>
            <div>
                通过以上3个演示，可以知道<code>StyleProvider</code>用于控制<code>style</code>插入的位置和方式
            </div>
        </div>
    );
};

export default Speedy;
