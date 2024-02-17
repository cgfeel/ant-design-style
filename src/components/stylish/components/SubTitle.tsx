import { ReadOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Row } from "antd";
import { startCase } from "lodash-es";
import { FC, ReactNode } from "react";
import { ActionPanel } from "./ActionPanel";
import { TextCol } from "./Title";
import { useTheme } from "antd-style";

const SubTitleInfo = styled.div`
    color: ${({ theme }) => theme.colorText};
    font-weight: 600;
    width: 100%;
`;

const SubTitleRow = styled(Row)<SubTitleRowProps>`
    font-size: ${({ size }) => size + "px"};
    margin-bottom: ${({ size }) => size + "px"};
    ${`
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
    `}
    ${({ prefixCls }) => {
        if (prefixCls)
            return `
                .${prefixCls}-space {
                    display: none;
                }
                &:hover {
                    .${prefixCls}-space {
                        display: flex;
                    }
                }
            `;
    }}
`;

interface SubTitleRowProps {
    size: number;
    prefixCls: string;
}

export interface SubTitleProps {
    name: string;
    actionHover?: boolean;
    addon?: ReactNode;
    chineseName?: string;
    id?: string;
    size?: number;
    url?: string;
}

export const SubTitle: FC<SubTitleProps> = ({ actionHover, addon, chineseName, id, name, url, size = 14 }) => {
    const theme = useTheme();
    return (
        <SubTitleRow align="middle" wrap={false} prefixCls={actionHover ? theme.prefixCls : ""} size={size}>
            <TextCol flex="auto">
                <SubTitleInfo id={id || name}>{[startCase(name), chineseName].filter(Boolean).join(" ")}</SubTitleInfo>
            </TextCol>
            <ActionPanel>
                {addon}
                {url && <ReadOutlined title="文档" />}
            </ActionPanel>
        </SubTitleRow>
    );
};
