import { Flex, Select } from "antd";
import { createStyles } from "antd-style";
import { FC, useState } from "react";

const useStyles = createStyles(({ css, token, prefixCls }, { id, open }: StyleProps) => {
    const firstSelected = id === "1";
    const selected1 = css`
        border-radius: 50%;
        box-shadow: ${token.boxShadowSecondary};

        // 修改选中元素的背景色和文本色
        &.${prefixCls}-select-single {
            .${prefixCls}-select-selector {
                background-color: ${token.colorPrimary};
                border-color: transparent;
                color: ${token.colorTextLightSolid};
                .${prefixCls}-select-selection-item {
                    color: ${token.colorTextLightSolid};
                }
            }
        }
        ${prefixCls}-select-array {
            color: ${token.colorTextLightSolid};
        }
    `;
    return {
        select: css`
            .${prefixCls}-select-selector {
                border-color: ${open ? token.colorSuccess : ""} !important;
                box-shadow: ${open ? "none" : ""} !important;
            }
            ${firstSelected ? selected1 : ""}
        `,
        wraper: css`
            margin-bottom: 100px;
            & code {
                background-color: #f2f2f2;
                border: 1px solid #ddd;
                margin: 0 2px;
                padding: 4px;
            }
        `,
    };
});

const SelectItem: FC<SelectItemProps> = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);
    const { styles } = useStyles({ open, id: value });

    return (
        <Select
            className={styles.select}
            open={open}
            options={[
                { label: "选项1", value: "1" },
                { label: "选项2", value: "2" },
                { label: "选项3", value: "3" },
            ]}
            value={value}
            onClick={() => !open && setOpen(true)}
            onSelect={e => {
                onChange?.(e);
                setOpen(false);
            }}
        />
    );
};

const PropsStyle: FC = () => {
    const { styles } = useStyles({});
    const [id, setId] = useState<string>("2");
    const [id2, setId2] = useState<string>("1");
    return (
        <div className={styles.wraper}>
            <h2>外部传入 props</h2>
            <Flex gap={24} justify="center">
                <SelectItem value={id} onChange={setId} />
                <SelectItem value={id2} onChange={setId2} />
            </Flex>
            <div>
                <p>
                    注解：在<code>createStyles</code>中<code>prefixCls</code>表示样式前缀，这里使用的是<code>antd</code>
                    可以通过统一设置为其他名称，且样式保持不变
                </p>
                <p>
                    在 antd 组件中可以看到大量的<code>:where</code>这样的语法，这是使用<code>emotion</code>自动添加，在
                    <code>:where</code>中指向的名称最后是缓存的 ID
                </p>
            </div>
        </div>
    );
};

interface StyleProps {
    id?: string;
    open?: boolean;
}

interface SelectItemProps {
    value: string;
    onChange?: (value: string) => void;
}

export default PropsStyle;
