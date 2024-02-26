import { Divider } from "antd";
import { FC, PropsWithChildren } from "react";
import ThemeInfo, { ThemeInfoProps } from "../../theme/provider/ThemeInfo";
import Demo from "../../theme/provider/Demo";

const ThemeControler: FC<PropsWithChildren<ThemeControlerProps>> = ({ children, extra }) => (
    <Demo>
        <ThemeInfo extra={extra} />
        <Divider />
        {children}
    </Demo>
);

export interface ThemeControlerProps extends ThemeInfoProps {}

export default ThemeControler;
