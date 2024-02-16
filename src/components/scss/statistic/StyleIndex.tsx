import styled from "@emotion/styled";
import { App, Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../global";
import Description from "./Description";
import StatisticApp from "./StatisticApp";
import Wraper from "./Wraper";
import { itemsList } from "./server";
import useStyles from "./style";

declare module "@emotion/react" {
    export interface Theme {
        colorBgLayout: string;
    }
}

const Container = styled(Flex)`
    background-color: ${p => p.theme.colorBgLayout};
    padding: 24px;
`;

const StyleApp: FC = () => {
    const { styles, cx } = useStyles();
    return (
        <Container gap={24}>
            {itemsList.map(([key, props]) => (
                <Wraper key={key} styles={styles} cx={cx}>
                    <StatisticApp {...props} layout={key} />
                    <Description>{key}</Description>
                </Wraper>
            ))}
        </Container>
    );
};

const StyleIndex: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                通过<code>createStyle</code>实现统计
            </h2>
            <ThemeProvider prefixCls="css-in-js">
                <App>
                    <StyleApp />
                </App>
            </ThemeProvider>
            <div>
                <p>
                    通过<code>ThemeProvider</code>+<code>createStyle</code>来执行<code>css-in-js</code>其原理也是通过
                    <code>context</code>上下文去实现，所以在使用<code>useStyles</code>时一定要确保是在
                    <code>Provider</code>
                    组件的子组件中使用
                </p>
            </div>
        </div>
    );
};

export default StyleIndex;
