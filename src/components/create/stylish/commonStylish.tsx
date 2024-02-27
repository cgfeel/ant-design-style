import { createStylish } from "antd-style";

export const useStylish = createStylish(({ token, css }) => {
    const containerBgHover = css`
        cursor: pointer;
        transition: 150ms background-color ease-in-out;
        &:hover {
            background-color: ${token.colorFillQuaternary};
        }
    `;
    const defaultButtonBase = css`
        background-color: ${token.colorFillQuaternary};
        border-color: transparent;
        color: ${token.colorTextSecondary};
    `;
    return {
        containerBgHover: css`
            cursor: pointer;
            transition: 150ms background-color ease-in-out;
            &:hover {
                background-color: ${token.colorFillQuaternary};
            }
        `,
        containerBgL2: css`
            ${containerBgHover};
            background-color: ${token.colorFillQuaternary};
            border-radius: 4px;
            &:hover {
                background-color: ${token.colorFillTertiary};
            }
        `,
        defaultButton: css`
            ${defaultButtonBase};
            &:focus {
                ${defaultButtonBase};
                border-color: ${token.colorPrimary};
            }
            &:hover {
                background-color: ${token.colorFillSecondary};
                border-color: transparent;
                color: ${token.colorText};
            }
        `,
    };
});
