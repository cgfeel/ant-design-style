import { Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import { ThemeContext } from "styled-components";
import { customToken, StyledButton, StyledWraper } from "./style";

const StyledCustomToken: FC = () => (
    <StyledWraper>
        <h2>
            <code>styled</code>与<code>ThemeProvider</code>集成
        </h2>
        <Flex gap={24}>
            <ThemeProvider customToken={customToken} styled={{ ThemeContext }}>
                <StyledButton>注入 styled-components 的 Provider</StyledButton>
            </ThemeProvider>
            <ThemeProvider customToken={customToken}>
                <StyledButton>只包裹 ThemeProvider</StyledButton>
            </ThemeProvider>
            <StyledButton>不包裹 Provider</StyledButton>
        </Flex>
        <p>
            只有注入了 <code>styled-components</code> 的 <code>ThemeContext</code> ，才能响应自定义 <code>token</code>
        </p>
    </StyledWraper>
);

export default StyledCustomToken;
