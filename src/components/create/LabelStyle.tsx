import styled from "@emotion/styled";
import { createStyles } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../globalWrapper";

const Container = styled.p`
    color: hotpink;
    label: some-button;
    &:hover {
        color: blue;
    }
`;

const useStyles = createStyles(
    ({ css }) => ({
        text: css`
            color: blue;
        `,
    }),
    {
        label: "with-label",
    },
);

const LabelStyle: FC = () => {
    const { styles: globalStyles } = useGlobalStyles();
    const { styles } = useStyles();
    return (
        <div className={globalStyles.wraper}>
            <h2>
                <code>ClassNameGeneratorOption</code> - <code>label</code>
            </h2>
            <p className={styles.text}>赋予 with-label 标签</p>
            <Container>Some Text in emotion label</Container>
            <div>
                <p>
                    从上面的例子可以看出<code>antd-style</code>的<code>label</code>无效，包括官网案例
                </p>
                <p>
                    于是我用<code>@emotion/styled</code>补充了一个案例做对比
                </p>
            </div>
        </div>
    );
};

export default LabelStyle;
