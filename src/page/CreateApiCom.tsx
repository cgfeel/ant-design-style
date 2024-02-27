import { FC } from "react";
import CreateStyles from "../components/create/CreateStyles";
import PrefixButton from "../components/create/PrefixButton";
import Responsive from "../components/create/Responsive";
import GolbalStyleApp from "../components/create/global";
import StylishBtn from "../components/create/stylish";
import Claybtn from "../components/stylish/claybtn";

const CreateApiCom: FC = () => (
    <>
        <CreateStyles />
        <Responsive />
        <PrefixButton />
        <StylishBtn />
        <Claybtn />
        <GolbalStyleApp />
    </>
);

export default CreateApiCom;
