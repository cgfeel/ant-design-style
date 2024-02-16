import { Button, Space } from "antd";
import { ThemeProvider, createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ prefixCls, token, css }) => ({
    override: css`
        &.${prefixCls}-btn {
            background-color: ${token.colorWarning};
        }
    `,
}));

const Demo: FC<DemoProps> = ({ text = "override to warning color" }) => {
    const { styles } = useStyles();
    return <Button className={styles.override}>{text}</Button>;
};

const PrefixCls: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>覆写样式名前缀</h2>
            <Space>
                <Demo />
                <ThemeProvider prefixCls="abc">
                    <Demo text="prefixCls to abc" />
                </ThemeProvider>
            </Space>
        </div>
    );
};

interface DemoProps {
    text?: string;
}

export default PrefixCls;
