import { ThemeProvider, createGlobalStyle } from "antd-style";
import { FC } from "react";

const Global = createGlobalStyle`
    .ant-custom-button {
        background-color: ${p => p.theme.colorPrimaryBg};
        border: none;
        border-radius: ${p => p.theme.borderRadius}px;
        color: ${p => p.theme.colorPrimary};
        cursor: pointer;
        height: ${p => p.theme.controlHeight}px;
        padding: 0 ${p => p.theme.paddingContentHorizontal}px;
        :active {
            background-color: ${p => p.theme.colorPrimaryBorder};
            color: ${p => p.theme.colorPrimaryTextActive};
        }
        :hover {
            background-color: ${p => p.theme.colorPrimaryBgHover};
            color: ${p => p.theme.colorPrimaryText};
        }
    }
`;

const GlobalToken: FC = () => {
    return (
        <ThemeProvider>
            <Global />
            <button className="ant-custom-button">antd 中不存在的按钮</button>
        </ThemeProvider>
    );
};

export default GlobalToken;
