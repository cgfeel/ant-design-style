import { Divider } from "antd";
import { FC } from "react";
import ComGroup from "./ComGroup";
import Demo from "./Demo";
import ThemeInfo, { ThemeInfoProps } from "./ThemeInfo";

const ThemeControler: FC<ThemeControlerProps> = ({ extra }) => {
    return (
        <Demo>
            <ThemeInfo extra={extra} />
            <Divider orientation="left" style={{ margin: "8px 0" }}>
                组件示例
            </Divider>
            <ComGroup />
        </Demo>
    );
};

export interface ThemeControlerProps extends ThemeInfoProps {}

export default ThemeControler;
