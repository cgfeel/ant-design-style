import { FC } from "react";
import { useStore } from "./useStore";
import PickCard from "../PickCard";

const Controller: FC = () => {
    const themeMode = useStore();
    return <PickCard value={themeMode} onChange={value => useStore.setState(value)} />;
};

export default Controller;
