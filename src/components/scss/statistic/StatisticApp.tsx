import { Statistic, StatisticProps } from "antd";
import { FC, ReactNode, useContext } from "react";
import { WraperContext } from "./Wraper";

const StatisticApp: FC<StatisticAppProps> = ({ prefix, tips, title, trend, layout = "inline", ...props }) => {
    const { combination } = useContext(WraperContext);
    return (
        <Statistic
            className={combination({
                [`layout-${layout}`]: layout,
                [`trend-${trend}`]: trend,
            })}
            prefix={
                (prefix || trend) && (
                    <>
                        {trend && <div className={combination(["trend-icon", `trend-icon-${trend}`])}></div>}
                        {prefix}
                    </>
                )
            }
            title={
                (tips || title) && (
                    <>
                        {title}
                        {tips}
                    </>
                )
            }
            {...props}
        />
    );
};

export interface StatisticAppProps extends StatisticProps {
    /** Layout 布局 */
    layout?: "horizontal" | "inline" | "vertical";
    /** 标题提示 */
    tips?: ReactNode;
    /** 趋势 */
    trend?: "down" | "up";
}

export default StatisticApp;
