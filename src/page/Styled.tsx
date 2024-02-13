import { Tabs, TabsProps } from "antd";
import { FC, Suspense, lazy } from "react";

const StyledList = lazy(() => import("../components/styled"));
const SetupApp = lazy(() => import("../components/styled/setup"));

const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Styled and Emotion",
        children: (
            <Suspense fallback={<div>Loading...</div>}>
                <StyledList />
            </Suspense>
        ),
    },
    {
        key: "2",
        label: "SetupApp",
        children: (
            <Suspense fallback={<div>Loading...</div>}>
                <SetupApp />
            </Suspense>
        ),
    },
];

const Styled: FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default Styled;
