import { FC } from "react";
import CustomToken from "../components/custom/CustomToken";
import InputClassNames from "../components/custom/InputClassNames";
import MoreWeight from "../components/custom/MoreWeight";
import PopoverCustom from "../components/custom/PopoverCustom";
import PrefixCls from "../components/custom/PrefixCls";

const Custom: FC = () => (
    <>
        <CustomToken />
        <PopoverCustom />
        <PrefixCls />
        <MoreWeight />
        <InputClassNames />
    </>
);

export default Custom;
