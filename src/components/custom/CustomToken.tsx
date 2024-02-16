import { Badge } from "antd";
import { ThemeProvider, useTheme } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module "antd-style" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface CustomToken extends NewToken {}
}

const App = () => {
    const token = useTheme();
    return (
        <div>
            <Badge color={token.customBrandColor} text={token.customBrandColor} />
        </div>
    );
};

const CustomToken: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                扩展 <code>CustomToken</code> 对象类型
            </h2>
            <ThemeProvider<NewToken> customToken={{ customBrandColor: "#c956df" }}>
                <App />
            </ThemeProvider>
            <div>
                <p>
                    必要：通过给<code>declare</code>为<code>CustomToken</code>扩展类型
                </p>
                <p>
                    可选：通过给<code>ThemeProvider</code>添加泛型<code>{"<>"}</code>，不加也可以，会推导
                </p>
            </div>
        </div>
    );
};

interface NewToken {
    customBrandColor: string;
}

export default CustomToken;
