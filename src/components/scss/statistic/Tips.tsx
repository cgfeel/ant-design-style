import { QuestionCircleOutlined } from "@ant-design/icons";
import { Tooltip, TooltipProps } from "antd";
import { FC } from "react";
import { WraperInstance } from "./Wraper";

const Tips: FC<TipsProps> = ({ title, combination }) => (
    <Tooltip title={title}>
        <QuestionCircleOutlined className={combination(["tip"])} />
    </Tooltip>
);

export interface TipsProps extends Pick<TooltipProps, "title">, WraperInstance {}

export default Tips;
