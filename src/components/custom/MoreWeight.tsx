import { App, Layout } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ prefixCls, token, css }) => ({
    default: css`
        .${prefixCls}-layout-header {
            background-color: ${token.colorPrimary};
        }
    `,
    moreWeight: css`
        // ↓ (在字面量模板函数允许注册)
        &.${prefixCls}-layout-header {
            background-color: ${token.colorPrimary};
        }
    `,
}));

const MoreWeight: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>抬升权重覆写</h2>
            <App>
                <Layout>
                    <Layout.Header className={styles.default}>无法覆盖</Layout.Header>
                    <Layout.Header className={styles.moreWeight}>可正常覆盖</Layout.Header>
                </Layout>
            </App>
            <p>
                这里通过<code>&</code>实现在组件本身抬权，最终样式为<code>{".{hash_name}.{class_name}"}</code>，如果不加
                <code>&</code>最终样式为<code>{".{hash_name} .{class_name}"}</code>，只适用于组件下包裹的元素
            </p>
        </div>
    );
};

export default MoreWeight;
