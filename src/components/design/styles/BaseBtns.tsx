import { Card, Flex } from "antd";
import { ReturnStyles } from "antd-style";
import { FC, ReactNode } from "react";

const BaseBtns: FC<BaseBtnsProps> = ({ className, cx, list, styles, title }) => (
    <Card size="small" title={title}>
        <Flex gap={8} className={className}>
            {list.map(({ className, key, value }) => (
                <button className={cx(styles.container, key && styles[key], className)} key={key}>
                    {value}
                </button>
            ))}
        </Flex>
    </Card>
);

type KeysType = "default" | "filled" | "primary" | "text";
type ItemType = { key: KeysType; value: ReactNode; className?: string };

export interface BaseBtnsProps extends Pick<ReturnStyles<Record<KeysType | "container", string>>, "cx" | "styles"> {
    list: ItemType[];
    title: string;
    className?: string;
}

export default BaseBtns;
