import { FC } from "react";
import Layout from "./Layout";
import { Button, Space } from "antd";
import { showMessage, showModal, showNotification } from "./request";
import useGlobalStyles from "../global";

const ActionIndex: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>Modal 、message 等 antd 的静态方法不响应主题，如何解决？</h2>
            <Layout>
                <Space>
                    <Button type="primary" onClick={showMessage}>
                        Open message
                    </Button>
                    <Button onClick={showModal}>Open modal</Button>
                    <Button onClick={showNotification}>Open notification</Button>
                </Space>
            </Layout>
        </div>
    );
};

export default ActionIndex;
