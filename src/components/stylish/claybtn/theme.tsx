import { GetCustomStylish, GetCustomToken, css } from "antd-style";

interface ClayStylish {
    clay: string;
}

interface ClayToken {
    clayBg: string;
    clayBorderRadius: number;
    clayShadowInsetPrimary: string;
    clayShadowInsetSecondary: string;
    clayShadowOutset: string;
}

declare module "antd-style" {
    interface CustomToken extends ClayToken {}
    interface CustomStylish extends ClayStylish {}
}

export const getClayStylish: GetCustomStylish<ClayStylish> = ({ token }) => ({
    clay: css`
        background-color: ${token.clayBg};
        border-radius: ${token.clayBorderRadius}px;
        box-shadow:
            ${token.clayShadowOutset},
            inset ${token.clayShadowInsetPrimary};
    `,
});

export const getClayToken: GetCustomToken<ClayToken> = theme => ({
    clayBg: "rgba(0, 0, 0, .05)",
    clayBorderRadius: 32,
    clayShadowInsetPrimary: "-8px -8px 16px 0 rgba(0, 0, 0, .25)",
    clayShadowInsetSecondary: "8px 8px 16px 0 rgba(255, 255, 255, .2)",
    clayShadowOutset: "8px 8px 16px 0 rgba(0, 0, 0, .25)",
});
