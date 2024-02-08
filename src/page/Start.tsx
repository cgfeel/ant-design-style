import { FC } from "react";
import Command from "../components/start/command";
import Keyframes from "../components/start/Keyframes";
import PropsStyle from "../components/start/PropsStyle";
import StaticStyle from "../components/start/StaticStyle";
import TokenStyle from "../components/start/TokenStyle";
import Typical from "../components/start/Typical";

const Start: FC = () => (
    <>
        <Typical />
        <StaticStyle />
        <TokenStyle />
        <PropsStyle />
        <Command />
        <Keyframes />
    </>
);

export default Start;
