import { FC } from "react";
import SassIndex from "../components/scss/search/SassIndex";
import StyleIndex from "../components/scss/search/StyleIndex";
import StatisticScss from "../components/scss/statistic/SassIndex";
import StatisticStyle from "../components/scss/statistic/StyleIndex";

const Scss: FC = () => (
    <>
        <SassIndex />
        <StyleIndex />
        <StatisticScss />
        <StatisticStyle />
    </>
);

export default Scss;
