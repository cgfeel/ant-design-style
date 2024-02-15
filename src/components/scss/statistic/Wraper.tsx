import { ConfigProvider } from "antd";
import { ClassNamesUtil } from "antd-style";
import classNames from "classnames";
import {
    CSSProperties,
    FC,
    ForwardedRef,
    PropsWithChildren,
    ReactNode,
    createContext,
    forwardRef,
    useCallback,
    useContext,
    useImperativeHandle,
    useMemo,
} from "react";

const WraperContext = createContext<WraperInstance>({ combination: () => "" });

const WraperInternal = <T extends string | undefined = undefined>(
    { children, className, icon, status, style, styles, cx }: PropsWithChildren<WraperProps<T>>,
    ref: ForwardedRef<WraperInstance>,
) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls("pro-card-statistic");

    const changeKey = useCallback(
        (value: boolean, key?: string) => (key === undefined || value === false ? undefined : `${prefixCls}-${key}`),
        [prefixCls],
    );

    const getClassName: WraperInstance["combination"] = useCallback(
        arg => {
            const rule = Array.isArray(arg)
                ? arg.map(key => changeKey(true, key))
                : Object.keys(arg).map(key => changeKey(!!arg[key], key));
            return cx(rule);
        },
        [changeKey, cx],
    );

    useImperativeHandle(ref, () => ({
        combination: arg => getClassName(arg),
    }));

    // error, cx type is ClassNamesUtil
    // cx("test");

    return (
        <div className={cx(styles, prefixCls, className)} style={style}>
            {useMemo(
                () => (
                    <WraperContext.Provider value={{ combination: arg => getClassName(arg) }}>
                        {icon}
                        <div className={getClassName(["wrapper"])}>
                            {status}
                            <div className={getClassName(["content"])}>{children}</div>
                        </div>
                    </WraperContext.Provider>
                ),
                [children, icon, status, getClassName],
            )}
        </div>
    );
};

const Wraper: ForwardWraperRef = forwardRef(WraperInternal);

if (process.env.NODE_ENV !== "production") {
    Wraper.displayName = "Wraper";
}

interface ForwardWraperRef extends FC<PropsWithChildren<WraperProps<string | undefined>>> {
    <T extends string | undefined = undefined, P = WraperProps<T>>(
        props: P & { ref?: ForwardedRef<WraperInstance> },
    ): ReturnType<FC<P>>;
}

export interface WraperInstance {
    combination: (arg: (string | undefined)[] | Record<string, boolean | number | string | undefined>) => string;
}

export interface WraperProps<T extends string | undefined = undefined> {
    styles: T;
    cx: T extends string ? ClassNamesUtil : typeof classNames;

    /** ClassName */
    className?: string;
    /** Icon 图标 */
    icon?: ReactNode;
    /** 当前项显示的状态 */
    status?: ReactNode;
    /** 样式 */
    style?: CSSProperties;
}

export { WraperContext };

export default Wraper;
