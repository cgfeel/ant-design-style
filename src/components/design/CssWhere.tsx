import { Flex } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import useStyles from "./style";
import ButtonDefault from "./styles/ButtonDefault";
import ButtonGroup from "./styles/ButtonGroup";

const useGroupStyles = createStyles(
    ({ css }) => css`
        .my-btn {
            background-color: darkgreen;
            color: white;
        }
        .my-btn-primary {
            background-color: springgreen;
            color: green;
        }
    `,
);

const CssWhere: FC = () => {
    const { styles: groupStyles } = useGroupStyles();
    const { styles } = useStyles();

    return (
        <div className={styles.wraper}>
            <h2>覆写组件样式</h2>
            <Flex className={styles.flexBox} gap={24} vertical>
                <ButtonDefault
                    title="未使用 :where 选择器，外部样式无法覆盖 ❌"
                    className={groupStyles}
                    list={[
                        { key: "primary", value: "强调按钮" },
                        { key: "filled", value: "填充按钮" },
                        { key: "default", value: "默认按钮" },
                        { key: "text", value: "文本按钮" },
                    ]}
                />
                <ButtonGroup
                    title="使用了 :where 选择器，外部样式可正常覆盖 ✅"
                    className={groupStyles}
                    list={[
                        { key: "primary", value: "强调按钮" },
                        { key: "filled", value: "填充按钮" },
                        { key: "default", value: "默认按钮" },
                        { key: "text", value: "文本按钮" },
                    ]}
                />
            </Flex>
            <div>
                <p>
                    组件覆写中，假定一套组件有多个样式。那么组件本身可以抽离出来，而<code>createStyles</code>
                    则需要一个样式单独一个文件中创建，否则会因为缓存的导致无法覆盖。
                </p>
            </div>
        </div>
    );
};

export default CssWhere;
