import { HomeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Col, Row } from "antd";
import { FC } from "react";
import { ActionPanel } from "./ActionPanel";
import Avatar from "./Avatar";

const TitleInfo = styled.div`
    color: ${({ theme }) => theme.colorText};
    font-size: 16px;
    font-weight: 600;
    padding-top: 2px;
    width: 100%;
`;

const TitleRow = styled(Row)`
    margin-bottom: 12px;
`;

const TitleCol = styled(Col)`
    margin-right: 8px;
`;

export const TextCol = styled(Col)`
    > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const Title: FC<DsTitleProps> = ({ color, id, logo, name, url }) => (
    <TitleRow align="middle" justify="center" wrap={false} id={id ? String(id) : name}>
        <TitleCol flex="none">
            <Avatar size={20} color={color} logo={logo} name={name} />
        </TitleCol>
        <TextCol flex="auto">
            <TitleInfo>{name}</TitleInfo>
        </TextCol>
        <ActionPanel>{url && <HomeOutlined title="主页" />}</ActionPanel>
    </TitleRow>
);

export interface DsTitleProps {
    name: string;
    color?: string;
    id?: number;
    logo?: string;
    url?: string;
}
