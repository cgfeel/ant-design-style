import { FC, PropsWithChildren, useContext } from "react";
import { WraperContext } from "./Wraper";

const Description: FC<PropsWithChildren<DescriptionProps>> = ({ children }) => {
    const { combination } = useContext(WraperContext);
    return <div className={combination(["description"])}>{children}</div>;
};

export interface DescriptionProps {}

export default Description;
