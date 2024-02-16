import styled from "@emotion/styled";
import { createGlobalStyle } from "antd-style";
import { FC } from "react";
import CustomToken from "../components/custom/CustomToken";
import InputClassNames from "../components/custom/InputClassNames";
import MoreWeight from "../components/custom/MoreWeight";
import PopoverCustom from "../components/custom/PopoverCustom";
import PrefixCls from "../components/custom/PrefixCls";
import ActionIndex from "../components/custom/action";

const Global = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const AppCenter = styled.div`
    padding: 8px;
`;

const Custom: FC = () => (
    <>
        <Global />
        <AppCenter>
            <CustomToken />
            <PopoverCustom />
            <PrefixCls />
            <MoreWeight />
            <InputClassNames />
            <ActionIndex />
        </AppCenter>
    </>
);

export default Custom;
