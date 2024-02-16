import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "./global";

const useStyles = createStyles(({ css, cx }) => {
    // 使用 cx 包裹 css
    const child = cx(css`
        background-color: red;
        height: 100px;
        width: 100px;
    `);
    return {
        child,
        parent: css`
            cursor: pointer;
            &:hover {
                .${child} {
                    background-color: blue;
                }
            }
        `,
    };
});

const NestStyle: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>父子联动的样式书写</h2>
            <div className={styles.parent}>
                <div className={styles.child}></div>
                hover to change color
            </div>
            <p>
                使用 <code>cx</code> 包裹 <code>css</code>，得到（<code>acss-xxx</code>）类名
            </p>
        </div>
    );
};

export default NestStyle;
