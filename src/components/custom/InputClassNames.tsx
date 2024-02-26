import { Input } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ prefixCls, token, css }) => ({
    bg: css`
        background: ${token.colorBgLayout};
        margin-bottom: 24px;
        padding: 24px;
        & .${prefixCls}-input-affix-wrapper {
            background-color: transparent;
            border: 2px solid ${token.colorBorder};
        }
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
                <code>antd 5.14.1</code>文档中已将<code>classNames</code>的<code>affixWrapper</code>属性去掉（虽然
                <code>Typescript</code>中仍旧保留但已无实际用途），所以这里通过父级样式覆盖的方式代替
                <code>classNames</code>
            </div>
        </div>
    );
};

export default InputClassNames;
