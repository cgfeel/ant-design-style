import { FC } from "react";
import useGlobalStyles from "../globalWrapper";
import ThemeControler from "../theme/provider/ThemeControler";
import Controller from "./Controller";

const PickTheme: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>主题切换测试</h2>
            <ThemeControler extra={<Controller />} />
            <div>
                <p>
                    包含：刷新无闪屏、跟随系统自动切换；范围仅限<code>/apptheme</code>
                    这一个页面，因为其他演示页面主要针对<code>antd-style</code>
                    的演示，没有考虑主题适配，所以页面之间切换存在闪屏，而当前页面刷新可以正常演示。同理也包括当前页面最顶部的
                    <code>breadcrumb</code>，因为它是一个全局组件并不在当前主题演示的<code>Context Provider</code>。
                </p>
            </div>
        </div>
    );
};

export default PickTheme;
