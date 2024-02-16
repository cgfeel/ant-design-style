import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ css }) => ({
    container: css`
        .ant-btn-link {
            background-color: #f2f2f2;
            border: 2px dashed #f00;
            color: #f00;
            font-size: 16px;
            padding: 20px;
        }
    `,
}));

const GlobalStyle: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>CSS Modules 全局样式覆写迁移</h2>
            <div className={styles.container}>
                <div className="ant-btn-link">
                    当通过<code>css</code>书写样式的时候，样式名不会改变，可在样式下包裹全局样式层级
                </div>
            </div>
            <div>
                <p>
                    通过<code>css</code>书写样式的时候会保留一个顶级<code>hash</code>样式名，呈现为<code>hash</code>{" "}
                    {">"} <code>样式名</code>，通常在顶级元素的<code>className</code>名下，设置<code>style.xxx</code>
                    时使用
                </p>
                <p>
                    而在<code>样式名</code>前面加上<code>&</code>（如：<code>&.样式名</code>），则表示
                    <code>hash.样式名</code>，通常接整个
                    <code>styles</code>赋值给顶级元素的<code>className</code>时使用
                </p>
            </div>
        </div>
    );
};

export default GlobalStyle;
