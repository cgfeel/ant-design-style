import { Badge, Card } from "antd";
import { CreateStylesUtils, createStyles, useTheme } from "antd-style";
import { FC } from "react";

// https://github.com/ant-design/antd-style/commit/b394d9e9cdac7dd27df31463b808337586a00409
interface NewToken {
    customColor: string;
    customHeight: number;
}

declare module "antd-style" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface CustomToken extends NewToken {}
}

const uesCustomStyles = createStyles(({ prefixCls, token, css }: StylesProps) => ({
    wraper: css`
        height: ${token.customHeight}px;
        & .${prefixCls}-badge-status-text {
            color: ${token.customColor};
        }
    `,
}));

const App: FC = () => {
    const { styles: customStyles } = uesCustomStyles();
    const theme = useTheme();

    return (
        <Card>
            <div className={customStyles.wraper}>
                <Badge color={theme.customColor} text={theme.customColor} />
            </div>
        </Card>
    );
};

export interface StylesProps extends CreateStylesUtils {
    token: CreateStylesUtils["token"];
}

export default App;
