import styled from "styled-components";

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme {
        colorPrimary?: string;
        border?: string;
        borderRadius?: number;
        text?: string;
    }
}

const customToken = {
    border: "cyan",
    borderRadius: 8,
    text: "white",
};

const StyledButton = styled.button`
    background-color: ${p => p.theme.colorPrimary};
    border: 4px solid ${p => p.theme.border};
    border-radius: ${p => p.theme.borderRadius}px;
    color: ${p => p.theme.text};
    padding: 8px;
`;

const StyledWraper = styled.div`
    margin-bottom: 100px;
    code {
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        margin: 0 2px;
        padding: 4px;
    }
`;

export { customToken, StyledButton, StyledWraper };
