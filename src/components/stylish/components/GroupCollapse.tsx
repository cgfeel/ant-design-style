import { Collapse } from "antd";
import { createStyles } from "antd-style";
import { FC, PropsWithChildren } from "react";

const useStyles = createStyles(({ prefixCls, token, css }) => {
    const prefix = `${prefixCls}-collapse`;
    return css`
        &.${prefix} {
            > .${prefix}-item {
                .${prefix}-content {
                    overflow: unset;
                    &-box {
                        padding: 0;
                    }
                }
                > .${prefix}-header {
                    border-bottom: 1px solid ${token.colorSplit};
                    border-radius: 0;
                    color: ${token.colorTextTertiary};
                    font-size: 12px;
                    height: 30px;
                    margin-bottom: 12px;
                    padding: 0;
                    width: 100%;
                    .${prefix}-arrow {
                        color: ${token.colorTextQuaternary};
                        font-size: 14px;
                        left: unset;
                        right: 0;
                        top: 6px;
                        &:hover {
                            color: ${token.colorPrimary};
                        }
                    }
                }
            }
        }
    `;
});

export const GroupCollapse: FC<PropsWithChildren<GroupCollapseProps>> = ({ children, id, name }) => {
    const { styles } = useStyles();
    return (
        <Collapse
            className={styles}
            defaultActiveKey={["1"]}
            items={[
                {
                    id: id || name,
                    key: "1",
                    label: name,
                    children,
                },
            ]}
            ghost></Collapse>
    );
};

export interface GroupCollapseProps {
    name: string;
    id?: string;
}
