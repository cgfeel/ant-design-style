import styled from "@emotion/styled";
import { Flex, Tag, Tooltip } from "antd";
import { Breakpoint, DeviceScreen, useResponsive, useTheme } from "antd-style";
import { FC } from "react";

const objectEntries = <T extends object, K = keyof T>(obj: T) => Object.entries(obj) as Array<[K, T[keyof T]]>;

const Label = styled.div`
    color: ${p => p.theme.colorTextPlaceholder};
`;

const Demo: FC = () => {
    const responsive = useResponsive();
    const theme = useTheme();

    const breakPoints: Omit<typeof responsive, DeviceScreen> = {
        xs: responsive.xs,
        sm: responsive.sm,
        md: responsive.md,
        lg: responsive.lg,
        xl: responsive.xl,
        xxl: responsive.xxl,
    };

    const breakPointsValues: Record<Breakpoint, number> = {
        xs: theme.screenXSMax,
        sm: theme.screenSMMax,
        md: theme.screenMDMax,
        lg: theme.screenLGMax,
        xl: theme.screenXLMax,
        xxl: theme.screenXXLMin,
    };

    const breakPointQuery: Record<Breakpoint, string> = {
        xs: `@media (max-width: ${breakPointsValues.xs}px)`,
        sm: `@media (max-width: ${breakPointsValues.sm}px)`,
        md: `@media (max-width: ${breakPointsValues.md}px)`,
        lg: `@media (max-width: ${breakPointsValues.lg}px)`,
        xl: `@media (max-width: ${breakPointsValues.xl}px)`,
        xxl: `@media (min-width: ${breakPointsValues.xxl}px)`,
    };

    const devices: Record<DeviceScreen, ScreenItem> = {
        mobile: { refers: "xs", active: responsive.mobile },
        tablet: { refers: "md", active: responsive.tablet },
        laptop: { refers: "xl", active: responsive.laptop },
        desktop: { refers: "xxl", active: responsive.desktop },
    };

    return (
        <Flex gap={24} vertical>
            <Label>媒体断点查询</Label>
            <Flex gap={8}>
                {objectEntries(breakPoints).map(([key, value]) => {
                    const breakpointValue = breakPointsValues[key];
                    return (
                        <Tooltip key={key} title={breakPointQuery[key]}>
                            <Tag color={value ? "blue" : undefined}>
                                {key}: {breakpointValue}px
                            </Tag>
                        </Tooltip>
                    );
                })}
            </Flex>
            <Label>设备与断点映射关系</Label>
            <Flex gap={8}>
                {objectEntries(devices).map(([key, { active, refers }]) => (
                    <Tag color={active ? "green" : undefined} key={key} title={key}>
                        {key}: {refers}
                    </Tag>
                ))}
            </Flex>
        </Flex>
    );
};

declare module "@emotion/react" {
    export interface Theme {
        colorTextPlaceholder: string;
    }
}

type ScreenItem = {
    refers: Breakpoint;
    active?: boolean;
};

export default Demo;
