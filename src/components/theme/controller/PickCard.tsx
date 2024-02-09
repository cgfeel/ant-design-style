import { Card, Flex, Segmented, SegmentedProps } from "antd";
import { ThemeMode } from "antd-style";
import { FC } from "react";

const options: OptionItem[] = [
    { label: "自动", value: "auto" },
    { label: "亮色", value: "light" },
    { label: "暗色", value: "dark" },
];

const PickCard: FC<PickCardProps> = ({ value, onChange }) => {
    return (
        <Card size="small">
            <Flex align="center" gap={16}>
                主题模式：
                <Segmented options={options} value={value} onChange={onChange} />
            </Flex>
        </Card>
    );
};

type OptionItem = {
    label: string;
    value: ThemeMode;
};

export interface PickCardProps extends Pick<SegmentedProps<ThemeMode>, "onChange" | "value"> {}

export default PickCard;
