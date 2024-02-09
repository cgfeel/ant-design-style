import { FC } from "react";
import AutoTheme from "../components/theme/AutoTheme";
import PickTheme from "../components/theme/controller/pick";
import ZustandTheme from "../components/theme/controller/zustand";
import ThemeCustom from "../components/theme/custom";
import SelectTheme from "../components/theme/provider";

const Theme: FC = () => (
    <>
        <SelectTheme />
        <AutoTheme />
        <PickTheme />
        <ZustandTheme />
        <ThemeCustom />
    </>
);

export default Theme;
