import { ThemeProvider } from "antd-style";
import { FC } from "react";
import { useStore } from "../../theme/controller/zustand/useStore";
import ThemeControler from "./ThemeControler";
import Controller from "../../theme/controller/zustand/Controller";
import Demo from "./Demo";

const MacOS: FC = () => {
    const themeMode = useStore();
    return (
        <ThemeProvider
            themeMode={themeMode}
            theme={appearance =>
                appearance !== "dark"
                    ? undefined
                    : {
                          token: {
                              colorText: "rgb(166, 166, 166)",
                          },
                      }
            }>
            <ThemeControler extra={<Controller />}>
                <Demo />
            </ThemeControler>
        </ThemeProvider>
    );
};

export default MacOS;
