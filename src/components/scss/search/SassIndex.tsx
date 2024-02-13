import classNames from "classnames";
import { FC, useRef } from "react";
import HeaderSearch, { HeaderSearchProps } from "./HeaderSearch";
import SearchInput, { InputType, SearchInputInstance } from "./SearchInput";
import styles from "./index.module.scss";

const SassIndex: FC = () => {
    const inputRef = useRef<InputType>(null);
    const searchRef = useRef<SearchInputInstance | null>(null);

    return (
        <div className={styles.wraper}>
            <h2>
                通过<code>scss</code>实现搜索框
            </h2>
            <HeaderSearch styles={styles as HeaderSearchProps["styles"]} open={() => searchRef.current?.open()}>
                <SearchInput
                    inputRef={inputRef}
                    ref={searchRef}
                    combination={mode => classNames(styles.input, mode ? styles.show : "")}
                />
            </HeaderSearch>
        </div>
    );
};

export default SassIndex;
