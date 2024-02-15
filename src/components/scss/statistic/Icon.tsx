import { FC, PropsWithChildren, useContext } from "react";
import { WraperContext } from "./Wraper";

const Icon: FC<PropsWithChildren<IconProps>> = ({ children }) => {
    const { combination } = useContext(WraperContext);
    return <div className={combination(["icon"])}>{children}</div>;
};

export interface IconProps {}

export default Icon;
