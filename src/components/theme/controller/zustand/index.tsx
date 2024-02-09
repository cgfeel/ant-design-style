import { FC } from "react";
import { useStore } from "./useStore";
import { ThemeProvider } from "antd-style";
import ThemeControler from "../../provider/ThemeControler";
import useStyles from "../../style";
import Controller from "./Controller";

const ZustandTheme: FC = () => {
    const themeMode = useStore();
    const { styles } = useStyles();

    return (
        <div className={styles.wraper}>
            <h2>
                受控模式：通过<code>zustand</code>
            </h2>
            <ThemeProvider themeMode={themeMode}>
                <ThemeControler extra={<Controller />} />
            </ThemeProvider>
            <div>
                <p>
                    虽然上方说明：<code>appearance</code>描述了应用当前的外观状态。<code>themeMode</code>
                    则用于描述控制逻辑。
                </p>
                <p>但目前官方文档还有一句话：</p>
                <div className={styles.quote}>
                    注意：<code>themeMode</code> 和 <code>appearance</code>
                    目前暂不建议同时受控使用，不然可能会出现预料之外的问题。未来会增强此处的联动能力
                </div>
                <p>由此得出，想要实现多主题多皮肤（参考GitHub），目前不能通过受控模式实现</p>
            </div>
        </div>
    );
};

export default ZustandTheme;
