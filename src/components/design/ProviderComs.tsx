import { Flex } from "antd";
import { FC } from "react";
import useStyles from "./style";
import ButtonDefault from "./styles/ButtonDefault";
import { ProDemoProvider } from "./styles/stylesInstance";

const ProviderComs: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>独立样式</h2>
            <Flex className={styles.flexBox} gap={24} vertical>
                <ButtonDefault
                    list={[
                        { key: "primary", value: "强调按钮" },
                        { key: "filled", value: "填充按钮" },
                        { key: "default", value: "默认按钮" },
                        { key: "text", value: "文本按钮" },
                    ]}
                    title="未提供 Provider 选择器，外部样式无法覆盖 ❌"
                />
                <ProDemoProvider themeMode="dark">
                    <ButtonDefault
                        list={[
                            { key: "primary", value: "强调按钮" },
                            { key: "filled", value: "填充按钮" },
                            { key: "default", value: "默认按钮" },
                            { key: "text", value: "文本按钮" },
                        ]}
                        title="提供 Provider 选择器，外部样式可正常覆盖 ✅"
                        useInstance={true}
                    />
                </ProDemoProvider>
            </Flex>
            <div>
                <p>除了官方文档说明，以下是个人补充：</p>
                <ol>
                    <li>
                        <code>{'{ hashPriority: "low" }'}</code>的配置由于是在文件顶层，所以不能够根据组件传入的
                        <code>props</code>实现切换
                    </li>
                    <li>
                        <code>{'{ hashPriority: "low" }'}</code>
                        的配置会有严格的缓存问题，假如一套组件多个覆写样式，那么每个样式必须一个文件
                    </li>
                    <li>
                        <code>createInstance</code>主要通过自定义的<code>ThemeProvider</code>实现自定义的
                        <code>token</code>，一旦注册<code>token</code>，就可以通过<code>createStyles</code>来获取上下文
                        <code>token context</code>，即便<code>createStyles</code>由顶层<code>antd-style</code>提供
                    </li>
                    <li>
                        <code>createInstance</code>虽然可以通过<code>{"<>"}</code>
                        来声明泛型类型，但是目前来看并没什么用，在<code>createStyles</code>时，仍旧需要通过
                        <code>declare module</code>来扩展模块声明，和自定义<code>token</code>一样
                    </li>
                    <li>
                        官方文档建议全新写<code>css-in-js</code>，通过<code>{'{ hashPriority: "high" }'}</code>
                        ，有需要的部分再额外添加 className。但如果涉及到自定义<code>token</code>等需求，可能
                        <code>createInstance</code>更合适
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default ProviderComs;
