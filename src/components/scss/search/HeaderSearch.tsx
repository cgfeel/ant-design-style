import { CSSObject, ReturnStyleToUse, SerializedStyles } from "antd-style";
import { FC, PropsWithChildren } from "react";

const HeaderSearch: FC<PropsWithChildren<HeaderSearchProps>> = ({ children, styles, open }) => (
    <div className={styles.container}>
        <div className={styles.headerSearch} onClick={open}>
            {children}
        </div>
    </div>
);

type CssItem = CSSObject | string | SerializedStyles;
type StyleList = Record<CssKey, CssItem>;

export type CssKey = "container" | "headerSearch" | "input" | "show";
export interface HeaderSearchProps {
    styles: ReturnStyleToUse<StyleList>;
    open: () => void;
}

export default HeaderSearch;
