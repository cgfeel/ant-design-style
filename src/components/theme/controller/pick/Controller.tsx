import { useThemeMode } from "antd-style";
import { FC } from "react";
import PickCard from "../PickCard";

const Controller: FC = () => {
    const { themeMode, setThemeMode } = useThemeMode();
    return <PickCard value={themeMode} onChange={value => setThemeMode(value)} />;
};

export default Controller;
