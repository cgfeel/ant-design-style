import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input, InputRef } from "antd";
import { MutableRefObject, forwardRef, useImperativeHandle, useState } from "react";

const SearchInput = forwardRef<SearchInputInstance, SearchInputProps>(({ inputRef, combination }, ref) => {
    const [searchMode, setSearchMode] = useState(false);
    useImperativeHandle(ref, () => ({
        open: () => {
            setSearchMode(true);
            inputRef.current?.focus();
        },
    }));
    return (
        <>
            <SearchOutlined />
            <AutoComplete className={combination(searchMode)}>
                <Input size="small" ref={inputRef} onBlur={() => setSearchMode(false)} />
            </AutoComplete>
        </>
    );
});

if (process.env.NODE_ENV !== "production") {
    SearchInput.displayName = "SearchInput";
}

export interface SearchInputInstance {
    open: () => void;
}

export interface SearchInputProps {
    inputRef: MutableRefObject<InputType>;
    combination: (mode: boolean) => string;
}

export type InputType = InputRef | null;

export default SearchInput;
