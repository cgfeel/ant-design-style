import { theme } from "antd";
import { ThemeMode, ThemeProvider } from "antd-style";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

const AppContext = createContext({
    change: (theme: ThemeMode) => {
        ("");
    },
});

const AppProvider: FC<PropsWithChildren<AppProviderProps>> = ({ children }) => {
    const [themeMode, setThemeMode] = useState((window.localStorage.getItem("theme") || "auto") as ThemeMode);
    const [systemMode, setSystemMode] = useState(window.localStorage.getItem("system-theme"));

    const isDark = themeMode === "dark" || (themeMode === "auto" && systemMode === "dark");
    useEffect(() => {
        const handle = (event: MediaQueryListEvent) => {
            const mode = event.matches ? "dark" : "light";

            window.localStorage.setItem("system-theme", mode);
            setSystemMode(mode);
        };
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        media.addEventListener("change", handle);
        return () => {
            media.removeEventListener("change", handle);
        };
    }, [setSystemMode]);

    return (
        <AppContext.Provider
            value={{
                change: value => {
                    window.localStorage.setItem("theme", value);
                    document.getElementsByTagName("html")[0].dataset.theme = value;
                    setThemeMode(value);
                },
            }}>
            <ThemeProvider
                defaultThemeMode={themeMode}
                theme={{
                    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export interface AppProviderProps {}

export { AppContext };

export default AppProvider;
