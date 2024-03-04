"use client";

import { Divider, Space, Typography } from "antd";
import { createStyles, css } from "antd-style";
import { FC, PropsWithChildren, ReactNode } from "react";
import antd from "./antd.svg";

const { Title } = Typography;

const useStyles = createStyles(css`
    margin: 0;
`);

const TopLog: FC<PropsWithChildren<TopLogProps>> = ({ children, className, tips = <>Divider</> }) => {
    const { styles } = useStyles();
    return (
        <section className={className}>
            <Space align="center">
                <img alt="Ant Design" height={40} width={40} src={antd} />
                <Title level={2} className={styles}>
                    Ant Design (Without Sub Components)
                </Title>
            </Space>
            <div className="mb-10">
                <Divider>{tips}</Divider>
            </div>
            {children}
        </section>
    );
};

export interface TopLogProps {
    className?: string;
    tips?: ReactNode;
}

export default TopLog;
