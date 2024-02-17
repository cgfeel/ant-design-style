import styled from "@emotion/styled";
import { App } from "antd";

export const Wrapper = styled(App)`
    background-color: ${p => p.theme.colorBgLayout};
    color: ${p => p.theme.colorTextLabel};
    padding: ${p => `${p.theme.paddingXL}px ${p.theme.paddingLG}px`};
`;
