import { Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import { StyledButton, StyledWraper, customToken } from "../style";

const App: FC = () => (
    <StyledWraper>
        <h2>
            全局统一集成 <code>styled</code>
        </h2>
        <Flex gap={24}>
            <ThemeProvider customToken={{ text: customToken.text }}>
                <StyledButton>ThemeProvider2</StyledButton>
            </ThemeProvider>
            <ThemeProvider customToken={customToken}>
                <StyledButton>ThemeProvider1</StyledButton>
            </ThemeProvider>
            <StyledButton>不包裹 Provider</StyledButton>
        </Flex>
        <div>
            <p>
                虽然<code>styled</code>不设置<code>declare</code>重新扩展<code>Token</code>
                类型也不受<code>esline</code>检查，但这并不不妨碍扩展<code>DefaultTheme</code>，需要注意的是，除了使用
                <code>customToken</code>之外还定义了<code>them</code>，需要为每个属性设置可选
            </p>
            <p>
                虽然文档说将<code>setupStyled</code>设置在顶层，但在子集中设置也会影响顶层
            </p>
        </div>
    </StyledWraper>
);

export default App;
