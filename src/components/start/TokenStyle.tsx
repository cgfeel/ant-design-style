import { SmileOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ css, token }) => {
    const commonCard = css`
        border-radius: ${token.borderRadiusLG}px;
        padding: ${token.paddingLG}px;
    `;
    return {
        container: css`
            background-color: ${token.colorBgLayout};
            padding: 24px;
        `,
        defaultCard: css`
            ${commonCard}
            background-color: ${token.colorBgContainer};
            color: ${token.colorText};
        `,
        primaryCard: css`
            ${commonCard}
            background-color: ${token.colorPrimary};
            color: ${token.colorTextLightSolid};
        `,
        wraper: css`
            margin-bottom: 100px;
            & code {
                background-color: #f2f2f2;
                border: 1px solid #ddd;
                margin: 0 2px;
                padding: 4px;
            }
        `,
    };
});

const TokenStyle: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>使用 antd 的 token</h2>
            <div className={styles.container}>
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <Space>
                        <Button title="功能按钮的说明" icon={<SmileOutlined />} />
                        操作按钮
                    </Space>
                    <div className={styles.defaultCard}>普通卡片</div>
                    <div className={styles.primaryCard}>主要卡片</div>
                </Space>
            </div>
            <div>
                <p>
                    <code>css标签模板字面量</code>在这个语法中，函数名（例子中是<code>css</code>
                    ）后面跟着一个模板字面量（即css中的语法）
                </p>
                <p>
                    这时<code>css</code>成为了模板字面量前面的&quot;标签&ldquo;，它修改了模板字面量的行为。调用
                    <code>css</code>
                    的方式不是通常的函数调用方式，而是作为一个标签使用的，所以它会按照模板字符串的规则来解析输入参数。
                </p>
                <p>
                    给标签函数传递模板字面量时，模板字面量会被编译为两部分：一部分是字符串的数组（根据每个表达式分割），另一部分是表达式的数组（例如在
                    <code>createStyles</code>中使用函数时，参数中的<code>token</code>就是一个表达式对象集合）
                </p>
            </div>
        </div>
    );
};

export default TokenStyle;
