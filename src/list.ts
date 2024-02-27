import { lazy } from "react";

export const router = {
    "/": {
        name: "索引页",
        path: lazy(() => import("./page/List")),
    },
    "/app": {
        name: "默认页",
        path: lazy(() => import("./page/app/App")),
    },
    "/start": {
        name: "书写样式",
        path: lazy(() => import("./page/Start")),
    },
    "/theme": {
        name: "主题切换",
        path: lazy(() => import("./page/Theme")),
    },
    "/design": {
        name: '组件研发',
        path: lazy(() => import("./page/Design")),
    },
    "/styled": {
        name: "集成Styled",
        path: lazy(() => import("./page/Styled")),
    },
    "/scss": {
        name: '从Sass.css迁移',
        path: lazy(() => import("./page/Scss")),
    },
    "/compile": {
        name: "样式书写-最佳实践",
        path: lazy(() => import("./page/CompileStyle")),
    },
    "/custom": {
        name: '主题定制',
        path: lazy(() => import("./page/Custom")),
    },
    "/stylish": {
        name: "样式案例",
        path: lazy(() => import("./page/Stylish")),
    },
    "/create": {
        name: "创建样式",
        path: lazy(() => import("./page/CreateApiCom")),
    },
    "/provider": {
        name: "容器组件",
        path: lazy(() => import("./page/ProviderCom")),
    },
} as const;

export type RouterKey = keyof typeof router;
