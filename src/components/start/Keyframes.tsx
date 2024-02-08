import { Flex } from "antd";
import { createStyles, keyframes } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ css }) => {
    const bounce = keyframes`
        from, 20%, 53%, 80%, to {
            transform: translate3d(0, 0, 0);
        }
        40%, 43% {
            transform: translate3d(0, -30px, 0);
        }
        70% {
            transform: translate3d(0, -15px, 0);
        }
        90% {
            transform: translate3d(0, -4px, 0);
        }`;
    return {
        another: css`
            @keyframes another {
                from,
                20%,
                53%,
                80%,
                to {
                    transform: translate3d(0, 0, 0);
                }
                40%,
                43% {
                    transform: translate3d(0, -30px, 0);
                }
                70% {
                    transform: translate3d(0, -15px, 0);
                }
                90% {
                    transform: translate3d(0, -4px, 0);
                }
            }
            animation: another 1s ease infinite;
        `,
        one: css`
            animation: ${bounce} 1s ease infinite;
        `,
        wraper: css`
            margin-bottom: 100px;
            & code {
                background-color: #f2f2f2;
                border: 1px solid #ddd;
                margin: 0 2px;
                padding: 4px;
            }
        `,
    };
});

const Keyframes: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.wraper}>
            <h2>动画：Keyframes</h2>
            <Flex gap={8}>
                <div className={styles.one}>keyframes 写法一</div>
                <div className={styles.another}>keyframes 写法二</div>
            </Flex>
            <p>
                有两种方式：①从<code>antd-style</code>中导入<code>keyframes</code>作为<code>标签模板字面量</code>；②在
                css 中书写样式<code>@keyframes</code>
            </p>
        </div>
    );
};

export default Keyframes;
