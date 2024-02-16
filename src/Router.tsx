import { Suspense, lazy } from "react";

const router = {
    "/": lazy(() => import("./App")),
    "/compile": lazy(() => import("./page/CompileStyle")),
    "/custom": lazy(() => import("./page/Custom")),
    "/design": lazy(() => import("./page/Design")),
    "/scss": lazy(() => import("./page/Scss")),
    "/start": lazy(() => import("./page/Start")),
    "/styled": lazy(() => import("./page/Styled")),
    "/theme": lazy(() => import("./page/Theme")),
};

type RoterType = typeof router;
type RouterKey = keyof RoterType;

export default function Router() {
    const { pathname } = window.location;
    const Router = Object.keys(router).indexOf(pathname) < 0 ? undefined : router[pathname as RouterKey];

    return Router === undefined ? (
        <>This page is 404.</>
    ) : (
        <Suspense fallback={<>Loading...</>}>
            <Router />
        </Suspense>
    );
}
