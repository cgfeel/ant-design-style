import { createStyles } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ token, css }) => ({
    // Also supports obtaining the same writing experience as normal css through css string templates
    card: css`
        box-shadow: ${token.boxShadow};
        padding: ${token.padding}px;
        border-radius: ${token.borderRadius}px;
        color: ${token.colorTextTertiary};
        background: ${token.colorBgContainer};
        transition: all 100ms ${token.motionEaseInBack};

        margin-bottom: 8px;
        cursor: pointer;

        &:hover {
            color: ${token.colorTextSecondary};
            box-shadow: ${token.boxShadowSecondary};
        }
    `,
    // Supports the writing style of css object
    container: {
        backgroundColor: token.colorBgLayout,
        borderRadius: token.borderRadiusLG,
        maxWidth: 400,
        width: "100%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
    },
    wraper: {
        marginBottom: 100,
        code: {
            backgroundColor: "#f2f2f2",
            border: "1px solid #ddd",
            padding: 4,
            margin: "0 2px",
        },
    },
}));

const Typical: FC = () => {
    // The styles object in the useStyles method is cached by default, so there is no need to worry about re-rendering issues
    const { styles, cx, theme } = useStyles();

    return (
        // Use cx to organize className
        <div className={styles.wraper}>
            <h2>典型用例</h2>
            <div className={cx("a-simple-create-style-demo-classname", styles.container)}>
                <div className={styles.card}>createStyles Demo</div>
                {/* The theme object contains all token and theme information */}
                <div>Current theme mode: {theme.appearance}</div>
            </div>
            <p>
                createStyles可以通过 <code>css object</code>也可以通过<code>css标签模板字面量</code>设置
            </p>
        </div>
    );
};

export default Typical;
