import { Suspense, lazy } from 'react';

const router = {
    '/': lazy(() => import('./App')),
    '/typical': lazy(() => import('./page/Typical')),
};

type RoterType = typeof router;
type RouterKey =  keyof RoterType;

export default function Router() {
    const { pathname } = window.location;
    const Router = Object.keys(router).indexOf(pathname) < 0 ? undefined : router[pathname as RouterKey];

    return Router === undefined ? (
        <>This page is 404.</>
    ) : (
        <Suspense
            fallback={<>Loading...</>}
        >
            <Router />
        </Suspense>
    );
}