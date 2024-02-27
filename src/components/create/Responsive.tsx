import { createStyles, useResponsive } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const useStyles = createStyles(({ responsive, css }) => ({
    container: css`
        align-items: center;
        background-color: lightskyblue;
        color: darkblue;
        display: flex;
        font-size: 24px;
        height: 100px;
        justify-content: center;
        ${responsive.tablet} {
            background-color: darkseagreen;
            color: darkgreen;
        }
        ${responsive.desktop} {
            background-color: darksalmon;
            color: saddlebrown;
        }
        ${responsive.mobile} {
            background-color: pink;
            color: deeppink;
        }
    `,
}));

const Responsive: FC = () => {
    const { desktop, laptop, mobile } = useResponsive();
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();

    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>responsive</code>
            </h2>
            <div className={styles.container}>
                {mobile ? "mobile" : desktop ? "desktop" : laptop ? "laptop" : "tablet"}
            </div>
            <div>
                <p>
                    <code>responsive</code>几个值分别对应：<code>tablet</code>：<code>max-width: 991px</code>，
                    <code>desktop</code>：<code>min-width: 1600px</code>，<code>mobile</code>：
                    <code>max-width: 575px</code>；由于<code>mobile</code>和<code>tablet</code>都采用
                    <code>max-width</code>所以同时使用时，<code>tablet</code>的顺序一定要在<code>mobile</code>前面。
                </p>
            </div>
        </div>
    );
};

export default Responsive;
