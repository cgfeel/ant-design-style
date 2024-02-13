import { Button } from "antd";
import { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledWraper } from "./style";

const StyledButton = styled(Button)`
    background-color: ${props => props.theme.primary};
`;

const BtnStyle: FC = () => {
    const [appearance] = useState("light");
    return (
        <StyledWraper>
            <h2>
                <code>styled</code> 典型的主题消费方式
            </h2>
            <ThemeProvider theme={{ primary: appearance === "light" ? "blue" : "cyan" }}>
                <StyledButton>Click me</StyledButton>
            </ThemeProvider>
        </StyledWraper>
    );
};

export default BtnStyle;
