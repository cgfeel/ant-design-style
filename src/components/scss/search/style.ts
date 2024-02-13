import { createStyles, css } from "antd-style";

const useStyles = createStyles(({ token }) => ({
    container: {
        alignItems: "center",
        background: token.colorBgLayout,
        display: "flex",
        height: 200,
        justifyContent: "center",
    },
    headerSearch: css`
        align-items: center;
        display: inline-flex;
        > span[role="img"] {
            cursor: pointer;
        }
    `,
    input: {
        backgroundColor: "transparent",
        borderRadius: "0",
        minWidth: "0",
        overflow: "hidden",
        transition: "width .3s, margin-left .3s",
        width: "0",
        input: {
            boxShadow: "none !important"
        },
    },
    show: {
        marginLeft: 8,
        width: 210,
    }
}));

export default useStyles;
