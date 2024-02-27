import { SmileOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";

const useStyles = createStyles(({ token, css }) => {
    const commonCard = css`
        border-radius: ${token.borderRadiusLG}px;
        padding: ${token.paddingLG}px;
    `;
    return {
        container: css`
            background-color: ${token.colorBgLayout};
            padding: 24px;
        `,
        defaultCard: css`
            ${commonCard}
            background-color: ${token.colorBgContainer};
            color: ${token.colorText};
        `,
        primaryCard: css`
            ${commonCard}
            background-color: ${token.colorPrimary};
            color: ${token.colorTextLightSolid};
        `,
    };
});

const CommonCard: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.container}>
            <Space direction="vertical" size={16} style={{ width: "100%" }}>
                <Space>
                    <Button title="功能按钮的说明" icon={<SmileOutlined />} />
                    操作按钮
                </Space>
                <div className={styles.defaultCard}>普通卡片</div>
                <div className={styles.primaryCard}>主要卡片</div>
            </Space>
        </div>
    );
};

export default CommonCard;
