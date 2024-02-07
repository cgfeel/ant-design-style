import { createStyles, css } from "antd-style";
import { FC } from "react";

const useStyles = createStyles({
    container: {
        backgroundColor: "lightslategrey",
        marginBottom: 100,
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
});

const StaticStyle: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.header}>用法一</div>
            <p className={styles.text}>普通对象，无需动态性</p>
        </div>
    );
};

export default StaticStyle;
