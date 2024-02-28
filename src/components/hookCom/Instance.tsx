import { Button, Divider } from "antd";
import { createInstance } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const { StyleProvider, createStyles, css } = createInstance({
    container: document.body,
    key: "test",
});

const useStyles = createStyles({
    text: css`
        color: blue;
    `,
});

const Text = () => {
    const { styles } = useStyles();
    return <div className={styles.text}>我是文本</div>;
};

const Instance: FC = () => {
    const firstMeta = document.getElementsByTagName("meta")[0];
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>createInstance</code>
            </h2>
            <Text />
            <Button>按钮</Button>
            <StyleProvider prefix="abc" container={firstMeta}>
                <Divider>下方 style 插入在 第一个 meta 标签之后</Divider>
                <Text />
            </StyleProvider>
            <p>用于组件研发时需要</p>
        </div>
    );
};

export default Instance;
