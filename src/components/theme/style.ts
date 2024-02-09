import { createStyles, css } from "antd-style";

const useStyles = createStyles({
    quote: css`
        color: #777;
        padding-left: 20px;
        position: relative;
        &::before {
            background-color: #ddd;
            bottom: 0;
            content: '';
            display: block;
            left: 0;
            position: absolute;
            top: 0;
            width: 4px;
        }
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
});

export default useStyles;