import { createStyles } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ css }, color: TextProps["color"] = "blue") => ({
    text: css`
        color: ${color};
    `,
}));

const Text: FC<TextProps> = ({ color, tips }) => {
    const { styles } = useStyles(color);
    return <div className={styles.text}>{tips}</div>;
};

export interface TextProps {
    tips: string;
    color?: string;
}

export default Text;
