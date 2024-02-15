import { StatisticAppProps } from "./StatisticApp";

type ItemType = Omit<StatisticAppProps, 'combination'|'layout'>;
type GroupItem = [Exclude<StatisticAppProps['layout'], undefined>, ItemType];

const itemsList: GroupItem[] = [
    ['inline', { value: 12312 }],
    ['vertical', { value: 12312 }],
    ['horizontal', { trend: 'up', value: 12312 }],
];

export { itemsList };
