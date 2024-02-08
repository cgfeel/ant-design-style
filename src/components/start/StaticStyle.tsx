import { createStyles, css } from "antd-style";
import { FC } from "react";

const useStyles = createStyles({
    container: {
        backgroundColor: "lightslategrey",
        padding: 24,
    },
    header: css`
        color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    `,
    text: {
        color: "lightblue",
    },
    wraper: {
        marginBottom: 100,
    },
});

const StaticStyle: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>静态方法</h2>
            <div className={styles.container}>
                <div className={styles.header}>用法一</div>
                <p className={styles.text}>普通对象，无需动态性</p>
            </div>
        </div>
    );
};

export default StaticStyle;
