import { createInstance } from "antd-style";

export const { createStyles, ThemeProvider: ProDemoProvider } = createInstance<FormDemoToken>({
    key: 'css',
    prefixCls: 'for-demo',
    customToken: {
        demoBgColor: '#f1f2f5',
        primaryColor: '#ce1472',
    },
    hashPriority: 'low',
});

export interface FormDemoToken {
    demoBgColor: string;
    primaryColor: string;
}