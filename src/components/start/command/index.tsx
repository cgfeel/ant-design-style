import { SearchOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import useStyles from "./style";

const items = [
    { label: "New Figma Project", shortcut: "fn" },
    { label: "Color Picker", shortcut: "⌘ X", hover: true },
    { label: "Pick Brand Asset", shortcut: "⌘ B" },
    { label: "Pick Brand Color", shortcut: "⌘ A" },
    { label: "Optimize Selected Images", shortcut: "⌘ O" },
    { label: "Remove background from image", shortcut: "⌘ D" },
    { label: "Translate with Deepl", shortcut: "⌘ T" },
    { label: "Quick Notion note", shortcut: "⌘ N" },
    { label: "Search in Google", shortcut: "⌘ G" },
];

const Command: FC = () => {
    const { styles, cx } = useStyles();
    const [hover, setHover] = useState("");

    return (
        <div className={styles.wraper}>
            <h2>分离样式和文件</h2>
            <div className={styles.layout}>
                <div className={styles.container}>
                    <div className={styles.searchBox}>
                        <div className={styles.placeholder}>Trigger Macro by Name</div>
                        <SearchOutlined />
                    </div>
                    <div className={styles.menuContainer}>
                        {items.map(({ label, shortcut }) => (
                            <div
                                className={cx(styles.menuItem, hover === label ? styles.menuItemHover : "")}
                                key={label}
                                onMouseEnter={() => setHover(label)}>
                                <div>{label}</div>
                                <div>{shortcut}</div>
                            </div>
                        ))}
                    </div>
                    <div className="gradient-bg"></div>
                    <div className={styles.mask}></div>
                </div>
            </div>
            <p>
                当通过静态方式书写样式，可以直接从<code>antd-style</code>中导入<code>css</code>作为
                <code>标签模板字面量</code>
            </p>
        </div>
    );
};

export default Command;
