import { FC } from "react";
import CreateStyles from "../components/create/CreateStyles";
import LabelStyle from "../components/create/LabelStyle";
import PrefixButton from "../components/create/PrefixButton";
import Responsive from "../components/create/Responsive";
import GolbalStyleApp from "../components/create/global";
import StylishBtn from "../components/create/stylish";
import CssWhere from "../components/design/CssWhere";
import Claybtn from "../components/stylish/claybtn";

const CreateApiCom: FC = () => (
    <>
        <CreateStyles />
        <Responsive />
        <PrefixButton />
        <LabelStyle />
        <CssWhere />
        <StylishBtn />
        <Claybtn />
        <GolbalStyleApp />
    </>
);

export default CreateApiCom;
