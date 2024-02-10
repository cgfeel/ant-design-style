import { FC } from "react";
import AutoTheme from "../components/theme/AutoTheme";
import PickTheme from "../components/theme/controller/pick";
import ZustandTheme from "../components/theme/controller/zustand";
import ThemeCustom from "../components/theme/custom";
import CustomToken from "../components/theme/defined/custom";
import CustomApp from "../components/theme/defined/custom/CustomApp";
import CustomAppearanceCom from "../components/theme/defined/custom/CustomApparance";
import ThemeAppearance from "../components/theme/defined/ThemeAppearance";
import ThemeToken from "../components/theme/defined/ThemeToken";
import SelectTheme from "../components/theme/provider";

const Theme: FC = () => (
    <>
        <SelectTheme />
        <AutoTheme />
        <PickTheme />
        <ZustandTheme />
        <ThemeCustom />
        <ThemeToken />
        <ThemeAppearance />
        <CustomToken />
        <CustomApp />
        <CustomAppearanceCom />
    </>
);

export default Theme;
