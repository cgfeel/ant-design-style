import styled from "@emotion/styled";
import { FC } from "react";

const Title = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colorSplit};
    color: ${({ theme }) => theme.colorTextTertiary};
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 12px;
    width: 100%;
`;

export const GroupTitle: FC<GroupTitleProps> = ({ id, name }) => <Title id={id || name}>{name}</Title>;

export interface GroupTitleProps {
    name: string;
    id?: string;
}
