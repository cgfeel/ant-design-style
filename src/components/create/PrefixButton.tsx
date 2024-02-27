import { SmileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const useStyles = createStyles(({ iconPrefixCls, prefixCls, css }) => ({
    button: css`
        &.${prefixCls}-btn {
            background-color: lightsteelblue;
            border: none;
            color: royalblue;
        }
        .${iconPrefixCls} {
            color: darkblue;
        }
    `,
}));

const PrefixButton: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>prefixCls</code>和<code>iconPrefixCls</code>
            </h2>
            <Button className={styles.button} icon={<SmileOutlined />}>
                CP Button
            </Button>
        </div>
    );
};

export default PrefixButton;
