import { Flex } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ stylish, token, css, cx }) => ({
    btn: cx(
        stylish.clay,
        css`
            background-color: ${token.colorPrimaryBgHover};
            border-radius: 24px;
            color: ${token.colorPrimary};
            padding: 24px;
            width: 64px;
        `,
    ),
}));

const ClayApp: FC = () => {
    const { styles } = useStyles();
    return (
        <div>
            <Flex align="center" justify="center" className={styles.btn}>
                按钮
            </Flex>
        </div>
    );
};

export default ClayApp;
