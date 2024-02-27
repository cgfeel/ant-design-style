import { Flex } from "antd";
import { ThemeProvider, createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../../globalWrapper";
import App, { NewToken } from "./app";

const useStyles = createStyles(
    ({ token, css }) => css`
        background-color: ${token.colorBgLayout};
        padding: 24px;
    `,
);

const CustomToken: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>customToken</code> 注入自定义 <code>Token</code> 主题
            </h2>
            <Flex className={styles} gap={24} vertical>
                <ThemeProvider>
                    <App title="antd Token" tokenName="colorPrimary" />
                </ThemeProvider>
                <ThemeProvider<NewToken> customToken={{ customBrandColor: "#c956df" }}>
                    <App title="自定义 Token" tokenName="customBrandColor" />
                </ThemeProvider>
                <App title="未包裹 ThemeProvider" tokenName="customBrandColor" />
            </Flex>
        </div>
    );
};

export default CustomToken;
