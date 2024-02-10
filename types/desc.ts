interface NewToken {
    customColor: string;
};

declare module 'antd-style' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface CustomToken extends NewToken {}
}