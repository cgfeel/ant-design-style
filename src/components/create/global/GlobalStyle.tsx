import { createGlobalStyle } from "antd-style";
import { FC } from "react";

const Global = createGlobalStyle`
    .some-class {
        color: hotpink;
    }
`;

const GlobalStyle: FC = () => (
    <div>
        <Global />
        <div className="some-class">猛男最喜欢的颜色</div>
    </div>
);

export default GlobalStyle;
