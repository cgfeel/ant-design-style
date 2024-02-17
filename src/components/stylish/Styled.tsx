import { Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import { GroupCollapse, GroupTitle, SubTitle, Title, Wrapper } from "./components";
import useGlobalStyles from "./global";

const Styled: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                使用 <code>Styled</code> 构建风格样式组件
            </h2>
            <ThemeProvider prefixCls="typography" themeMode="auto">
                <Wrapper>
                    <Flex gap={24} vertical>
                        Title
                        <Title name="默认标题" url="https://github.com/cgfeel/ant-design-style" />
                        SubTitle
                        <SubTitle
                            chineseName="子标题"
                            name="subTitle"
                            url="https://github.com/cgfeel/ant-design-style"
                            addon={<div>sub</div>}
                            actionHover={true}
                        />
                        GroupTitle
                        <GroupTitle name="分组标题" />
                        GroupCollapse
                        <GroupCollapse name="可折叠分组标题">可折叠内容</GroupCollapse>
                    </Flex>
                </Wrapper>
            </ThemeProvider>
            <div>
                <p>几个坑：</p>
                <ol>
                    <li>
                        向<code>emotion</code>的<code>styled</code>传递props的时候，如果有参数类型是<code>boolean</code>
                        则会警告
                        <pre>
                            Warning: Received `false` for a non-boolean attribute. How do I pass a boolean for a custom
                            boolean attribute?
                        </pre>
                        <div>
                            解决办法是将<code>boolean</code>转换成<code>0</code>或<code>1</code>
                        </div>
                    </li>
                    <li>
                        在官方文档中，修改<code>styled</code>子对象时，直接设置子对象的样式，如：
                        <code>&#36;{"{ActionPanel} {}"}</code>，测试无效，最终通过覆写样式名解决问题
                    </li>
                    <li>
                        由于问题②，在覆写样式的时候<code>styled</code>拿不到<code>antd-style</code>的
                        <code>prefixCls</code>，解决办法一个是通过<code>ThemeProvider</code>设置<code>customToken</code>
                        ，另一个是通过组件传递<code>props</code>
                    </li>
                    <li>
                        由于是<code>styled</code>覆写<code>antd</code>的样式，权重值较低，官方文档是通过
                        <code>!important</code>，我的解决办法是通过<code>css</code>覆写层级样式，提升权重
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Styled;
