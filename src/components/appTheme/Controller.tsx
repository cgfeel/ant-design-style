import { useThemeMode } from "antd-style";
import { FC, useContext } from "react";
import PickCard from "../theme/controller/PickCard";
import { AppContext } from "./AppProvider";

const Controller: FC = () => {
    const { change } = useContext(AppContext);
    const { themeMode, setThemeMode } = useThemeMode();
    return (
        <PickCard
            value={themeMode}
            onChange={value => {
                change(value);
                setThemeMode(value);
            }}
        />
    );
};

export default Controller;
