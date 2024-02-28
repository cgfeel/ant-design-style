import styled from "@emotion/styled";
import { Divider } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";
import useGlobalStyles from "../../globalWrapper";
import Demo from "./Demo";

const Container = styled.div`
    background-color: ${p => p.theme.colorBgLayout};
    padding: ${p => p.theme.paddingLG}px;
`;

const Responsive: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>useResponsive</code>
            </h2>
            <Container>
                <Demo />
                <Divider />
                <ThemeProvider
                    theme={{
                        token: {
                            screenXS: 500,
                            screenMD: 800,
                            screenLG: 1100,
                        },
                    }}>
                    <Demo />
                </ThemeProvider>
            </Container>
            <p>
                通过<code>theme</code>可以修改<code>responsive</code>相应的值符合预期大小
            </p>
        </div>
    );
};

export default Responsive;
