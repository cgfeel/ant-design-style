import styled from "@emotion/styled";
import { Avatar as AvatarRaw } from "antd";
import { createStyles, useTheme } from "antd-style";
import { FC } from "react";

const AvatarText = styled.span`
    color: rgba(255, 255, 255, 0.6);
    font-size: 500;
`;

const useStyles = createStyles(
    ({ prefixCls, css }, { color }: Pick<AvatarProps, "color">) => css`
        &.${prefixCls}-avatar-square {
            background-color: ${color};
            border-radius: 4px;
        }
    `,
);

const Avatar: FC<AvatarProps> = ({ color, logo, name, size = 36 }) => {
    const theme = useTheme();
    const { styles } = useStyles({ color: logo ? undefined : color || theme.colorPrimary });

    return (
        <AvatarRaw shape="square" className={styles} size={size} src={logo}>
            {name && <AvatarText>{name.slice(0, 1).toUpperCase()}</AvatarText>}
        </AvatarRaw>
    );
};

export interface AvatarProps {
    color?: string;
    logo?: string;
    name?: string;
    size?: number;
}

export default Avatar;
