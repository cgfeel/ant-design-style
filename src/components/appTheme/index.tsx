import { FC } from "react";
import PickTheme from "./PickTheme";
import AppProvider from "./AppProvider";
import CardAndBtn from "./components/CardAndBtn";
import Section from "./components/Section";
import SubComponents from "./components/SubComponents";

const AppTheme: FC = () => {
    return (
        <AppProvider>
            <PickTheme />
            <CardAndBtn />
            <Section />
            <SubComponents />
        </AppProvider>
    );
};

export default AppTheme;
