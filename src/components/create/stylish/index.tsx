import { createStyles, css } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../../globalWrapper";
import { useStylish } from "./commonStylish";

const useStyles = createStyles({
    // 支持通过 css 字符串模板获得和普通 css 一致的书写体验
    btn: css`
        padding: 24px;
    `,
    // 也支持 css object 的写法
    container: {
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        display: "flex",
        height: 180,
        justifyContent: "center",
        maxWidth: 400,
        width: "100%",
    },
});

const StylishBtn: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles, cx } = useStyles();
    const stylish = useStylish();

    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>stylish</code>
            </h2>
            <div className={styles.container}>
                <div className={cx(styles.btn, stylish.defaultButton)}>stylish Button</div>
            </div>
            <p>通常用于一些公共样式时使用</p>
        </div>
    );
};

export default StylishBtn;
