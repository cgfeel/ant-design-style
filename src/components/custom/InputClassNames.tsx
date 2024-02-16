import { Input } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ token, css }) => ({
    bg: css`
        background: ${token.colorBgLayout};
        margin-bottom: 24px;
        padding: 24px;
    `,
    input: css`
        background: transparent;
    `,
    suffix: css`
        color: ${token.colorTextQuaternary};
    `,
    wrapper: css`
        background: transparent;
        border: 2px solid ${token.colorBorder};
    `,
}));

const InputClassNames: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>
                多 <code>classNames</code> 场景覆写
            </h2>
            <div className={styles.bg}>
                <Input
                    placeholder="自定义Input classNames"
                    suffix="$"
                    classNames={{ affixWrapper: styles.wrapper, input: styles.input, suffix: styles.suffix }}
                />
            </div>
            <div>
                <code>antd 5.14.1</code>的<code>classNames</code>目前存在bug，留一个坑
            </div>
        </div>
    );
};

export default InputClassNames;
