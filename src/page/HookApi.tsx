import { FC } from "react";
import ProviderComs from "../components/design/ProviderComs";
import Instance from "../components/hookCom/Instance";
import Responsive from "../components/hookCom/responsive";
import ThemeMode from "../components/hookCom/ThemeMode";
import ThemeToken from "../components/hookCom/ThemeToken";

const HookApi: FC = () => (
    <>
        <ThemeToken />
        <ThemeMode />
        <Responsive />
        <Instance />
        <ProviderComs />
    </>
);

export default HookApi;
