import styled from "@emotion/styled";
import { createGlobalStyle } from "antd-style";
import { FC } from "react";
import ActionIndex from "../components/custom/action";
import AppContainer from "../components/provider/AppContainer";
import Appearance from "../components/provider/Appearance";
import AppStyle from "../components/provider/AppStyle";
import ContainerBody from "../components/provider/ContainerBody";
import InsertionPoint from "../components/provider/InsertionPoint";
import Speedy from "../components/provider/Speedy";
import ProviderTheme from "../components/provider/usetheme";
import CustomToken from "../components/provider/usetheme/CustomToken";
import ThemeToken from "../components/theme/defined/ThemeToken";
import CustomTokenBadge from "../components/theme/defined/custom";

const Global = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const AppCenter = styled.div`
    padding: 8px;
`;

const ProviderCom: FC = () => (
    <>
        <Global />
        <AppCenter>
            <Appearance />
            <ProviderTheme />
            <ThemeToken />
            <CustomToken />
            <CustomTokenBadge />
            <AppStyle />
            <ActionIndex />
            <AppContainer />
            <ContainerBody />
            <InsertionPoint />
            <Speedy />
        </AppCenter>
    </>
);

export default ProviderCom;
