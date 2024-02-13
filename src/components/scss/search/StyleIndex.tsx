import { FC, useRef } from "react";
import useGlobalStyles from "../global";
import useStyles from "./style";
import HeaderSearch from "./HeaderSearch";
import SearchInput, { InputType, SearchInputInstance } from "./SearchInput";

const StyleIndex: FC = () => {
    const { styles: globalStyle } = useGlobalStyles();
    const { styles, cx } = useStyles();

    const inputRef = useRef<InputType>(null);
    const searchRef = useRef<SearchInputInstance | null>(null);

    return (
        <div className={globalStyle.wraper}>
            <h2>
                通过<code>createStyle</code>实现搜索框
            </h2>
            <HeaderSearch styles={styles} open={() => searchRef.current?.open()}>
                <SearchInput
                    inputRef={inputRef}
                    ref={searchRef}
                    combination={mode => cx(styles.input, mode ? styles.show : "")}
                />
            </HeaderSearch>
            <p>
                完全一样的组件，通过<code>sass</code>和<code>createStyle</code>两种方式实现
            </p>
        </div>
    );
};

export default StyleIndex;
