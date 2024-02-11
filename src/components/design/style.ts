import { createStyles, css } from "antd-style";

const useStyles = createStyles(({ token }) => ({
    flexBox: css`
        background-color: ${token.colorBgLayout};
        padding: 24px;
    `,
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

export default useStyles;