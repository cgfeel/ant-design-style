import { createStyles } from "antd-style";

const useGlobalStyles = createStyles(({ token }) => ({
    wraper: {
        marginBottom: 100,
        code: {
            backgroundColor: token.colorBgLayout,
            border: "1px solid " + token.colorBorder,
            padding: 4,
            margin: "0 2px",
        },
    },
}));

export default useGlobalStyles;
