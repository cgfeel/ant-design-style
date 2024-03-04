import { createStyles, css } from "antd-style";
import { Button } from "antd";
import { FC } from "react";
import TopLog from "./TopLogo";

const useStyles = createStyles(css`
    margin: 12px 0 10px;
    padding: 100px;
    text-align: center;
`);

const Section: FC = () => {
    const { styles } = useStyles();
    return (
        <TopLog className={styles}>
            <Button type="primary" block>
                With Sub Components
            </Button>
        </TopLog>
    );
};

export default Section;
