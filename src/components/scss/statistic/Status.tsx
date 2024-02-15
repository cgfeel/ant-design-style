import { Badge, BadgeProps } from "antd";
import { FC, useContext } from "react";
import { WraperContext } from "./Wraper";

const Icon: FC<StatusProps> = ({ status }) => {
    const { combination } = useContext(WraperContext);
    return (
        <div className={combination(["status"])}>
            <Badge status={status} text={null} />
        </div>
    );
};

export interface StatusProps extends Pick<BadgeProps, "status"> {}

export default Icon;
