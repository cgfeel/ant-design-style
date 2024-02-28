import { FC, ReactNode } from "react";
import Demo from "../theme/provider/Demo";
import ThemeInfo, { ThemeInfoProps } from "../theme/provider/ThemeInfo";
import { Divider } from "antd";

const ThemeControler: FC<ThemeControlerProps> = ({ extra, tips }) => (
    <Demo>
        <ThemeInfo extra={extra} />
        <Divider style={{ margin: 0 }} />
        {tips}
    </Demo>
);

export interface ThemeControlerProps extends ThemeInfoProps {
    tips?: ReactNode;
}

export default ThemeControler;
