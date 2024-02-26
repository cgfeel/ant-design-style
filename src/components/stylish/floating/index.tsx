import { ThemeProvider } from "antd-style";
import { FC } from "react";
import { useStore } from "../../theme/controller/zustand/useStore";
import Controller from "../../theme/controller/zustand/Controller";
import useGlobalStyles from "../global";
import ThemeControler from "./ThemeControler";
import Demo from "./Demo";

const MacOS: FC = () => {
    const { styles } = useGlobalStyles();
    const themeMode = useStore();
    return (
        <div className={styles.wraper}>
            <h2>MacOS 选择器</h2>
            <ThemeProvider
                themeMode={themeMode}
                theme={appearance =>
                    appearance !== "dark"
                        ? undefined
                        : {
                              token: {
                                  colorText: "rgb(166, 166, 166)",
                              },
                          }
                }>
                <ThemeControler extra={<Controller />}>
                    <Demo />
                </ThemeControler>
            </ThemeProvider>
            <div>
                <p>
                    <code>@floating-ui/react</code>文档请参考当前目录下的<code>./select/index.tsx</code>组件备注
                </p>
                <p>
                    <code>use-merge-value</code>作为<code>useMergedState</code>的别名，以下源码阅读记录：
                </p>
                <ul>
                    <li>
                        <code>useMergedState</code>开头分别引入了3个优化的hook：<code>useEvent</code>、
                        <code>useLayoutEffect</code>、<code>useState</code>
                    </li>
                    <li>
                        <code>useEvent</code>会为每一个回调函数包裹一个<code>useCallback</code>
                        ，这样无论重复渲染多少次只调用一次
                    </li>
                    <li>
                        <code>useLayoutEffect</code>在非<code>Dom</code>的环境下，以及<code>test</code>环境下，回退到
                        <code>useEffect</code>从而避免警告
                    </li>
                    <li>
                        <code>useState</code>通过绑定一个<code>useRef</code>作为销毁对象，当组件销毁时会设置
                        <code>ref</code>为<code>false</code>，这样避免组件注销时设置<code>status</code>会出现异常
                    </li>
                    <li>
                        重新回到<code>useMergedState</code>，除了通过以上做了优化外，作为一个<code>useState</code>优化的
                        <code>hooks</code>还提供如下：
                        <ul>
                            <li>
                                <code>onChange</code>，这样不用通过<code>useEffect</code>也能监听状态变化
                            </li>
                            <li>
                                <code>postState</code>，订阅并更新状态变化
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MacOS;
