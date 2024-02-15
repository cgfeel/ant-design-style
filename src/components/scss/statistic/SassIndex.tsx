import { App, ConfigProvider, Flex, theme } from "antd";
import { FC } from "react";
import Description from "./Description";
import StatisticApp from "./StatisticApp";
import Wraper from "./Wraper";
import classNames from "classnames";
import "./index.scss";
import { itemsList } from "./server";

const SassIndex: FC = () => {
    return (
        <div className="wraper">
            <h2>
                通过<code>scss</code>实现统计
            </h2>
            <ConfigProvider
                prefixCls="ant"
                theme={{
                    algorithm: theme.defaultAlgorithm,
                    inherit: false,
                }}>
                <App>
                    <Flex className="container" gap={40}>
                        {itemsList.map(([key, props]) => (
                            <Wraper key={key} cx={classNames}>
                                <StatisticApp {...props} layout={key} />
                                <Description>{key}</Description>
                            </Wraper>
                        ))}
                    </Flex>
                </App>
            </ConfigProvider>
        </div>
    );
};

export default SassIndex;
