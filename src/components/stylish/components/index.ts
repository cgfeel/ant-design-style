export * from "./ActionPanel";
export * from "./GroupCollapse";
export * from "./GroupTitle";
export * from "./SubTitle";
export * from "./Title";
export * from "./Wrapper";

declare module "@emotion/react" {
    export interface Theme {
        colorBgLayout: string;
        colorIcon: string;
        colorSplit: string;
        colorText: string;
        colorTextLabel: string;
        colorTextQuaternary: string;
        colorTextTertiary: string;
        paddingLG: number;
        paddingXL: number;
    }
}
