## 概括

按照 antd-style 官方文档，最小化复现每个示例。由于开发环境的不同，以及出于自己的理解，对工程文件做了调整，并给出了相应的说明。本项目不提供线上预览，如有需要请参考下方本地运行。

## 示例

### 快速上手

#### 工程文件

-   使用`react-app-rewired`作为启动，编译脚本，见`package.json`中`script`部分 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/package.json)]
-   使用`customize-cra`作为`webpack`配置 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/config-overrides.js)]
    -   包含 2 套解决方案`react-app-rewired`和`customize-cra`
-   在`src`目录下添加`.eslintrc.js`作为`eslint`自定义解决方案 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/.eslintrc.js)]

---- 分割线 ----

#### 书写样式

-   URL: `/start`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Start.tsx)]
-   包含章节：
    -   快速上手-书写样式[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/create-styles)]

**包含：**

-   典型用例
-   静态写法
-   使用 `antd` 的 `token`
-   外部传入 `props`
-   分离样式和文件、动画：Keyframes

---- 分割线 ----

#### 主题切换

-   URL: `/theme`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Theme.tsx)]
-   包含章节：
    -   快速上手-切换主题[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/switch-theme)]
    -   快速上手-自定义主题[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/custom-theme)]

**切换主题：**

-   通过`appearance`设置主题
-   通过`themeMode`跟随系统主题
-   受控模式：使用`useThemeMode`
-   受控模式：通过`zustand`切换主题
-   定制主题：修改主色与紧凑模式
-   定制主题：自定义暗色风格

**自定义主题：**

-   通过 `token` 设置 `theme`
-   通过函数定义主题
-   自定义 `token` 配置
-   通过函数方式调用
-   自定义外观模式

**划重点：**

-   `themeMode`用来定义主题亮色还是暗色，或者随系统；`appearance`用来定义主题风格
-   但目前相互定义会存在问题，所以多主题、多风格目前可能是个问题

---- 分割线 ----

#### 组件研发

-   URL: `/design`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Design.tsx)]
-   包含章节：
    -   进阶使用-组件研发[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/components-usage)]

**包含：**

-   覆写组件样式
-   独立样式

---- 分割线 ----

#### 集成Styled

-   URL: `/styled`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Styled.tsx)]
-   包含章节：
    -   进阶使用-集成styled[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/styled)]

**包含：**

-   `styled` 典型的主题消费方式
-   `styled` 与 `ThemeProvider` 集成
-   `@emotion/react` 与 `ThemeProvider` 集成
-   通过`declare` 扩展`token`声明
-   全局统一集成 `styled`

---- 分割线 ----

#### 从Sass.css迁移

-   URL: `/scss`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Scss.tsx)]
-   包含章节：
    -   `Sass` 应用手动迁移[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/migrate-less-application)]
    -   `Sass` 组件迁移[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/migrate-less-component)]

**说明：**

1. 官方文档是迁移`Less.css`，由于`create-react-app`默认支持`Sass.css`，而它们几乎相近因此采用`Sass.css`
2. 由于不是真的要迁移项目，因此示例的重点将放在`Sass.css`和`Css-in-js`的不同实现上
3. 在示例剥离了组件和`style`，这样相同的组件无论传入的是`Sass.css`还是`Css-in-js`的`styles`，都能够一套组件多个实现方式

**包含：**

-   `Ant Design Pro` 中的 `HeaderSearch`，两种实现方式
-   `procomponents` 中的 `ProCard` 的 `Static` 组件，两种实现方式

**划重点：**

-   通过`ThemeProvider`修改`token`后，是通过`useContext`上下文的方式实现
-   所以在这种情况下通过`createStyles`实现`useStyles`，一定要确保是在是在`Provider`组件下的子组件中使用，才能正确获取上下文

---- 分割线 ----

### 最佳实践

#### 样式书写

-   URL: `/compile`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/ComplieStyle.tsx)]
-   包含章节：
    -   父子联动的样式书写[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/nest-element-style)]
    -   `CSS Modules` 全局样式覆写迁移[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/mirgration-less-global-style)]

**包含：**

-   父子联动的样式书写
-   `CSS Modules` 全局样式覆写迁移

---- 分割线 ----

#### 主题定制

-   URL: `/custom`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Custom.tsx)]
-   包含章节：
    -   扩展自定义 `Token` 类型定义[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/custom-token-types)]
    -   自定义 `antd` 组件样式[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/antd-override)]
    -   `antd` 静态方法的主题失效[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/static-message)]

**包含：**

-   扩展 `CustomToken` 对象类型
-   基于 `ConfigProvider` 覆写 `antd` 的样式
-   覆写样式名前缀
-   抬升权重覆写
-   多 `classNames` 场景覆写
-   `Modal`、`message` 等 `antd` 的静态方法不响应主题，如何解决？

**备注：**

-   其中 `classNames` 场景覆写，`antd 5.14.1`起在文档中已去掉`input`组件的`affixWrapper`属性，因此通过父组件样式提权覆盖的方式实现
-   `antd 5.12.1`及以下不受影响: https://codepen.io/levi0001/pen/VwRgzOJ

---- 分割线 ----

#### 样式案例

-   URL: `/stylish`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Stylish.tsx)]
-   包含章节：
    -   黏土风 UI[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/clay)]
    -   样式组件[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/styled)]
    -   MacOS 选择器[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/mac-select)]

**包含：**

-   黏土风格：通过`customStylish`创建公共样式
-   使用 `Styled` 构建风格样式组件
-   结合 `floating-ui`[[查看](https://floating-ui.com/)] 与 `antd-style` 实现的 OSX 交互风格的选择器
-   通过`use-merge-value`[[查看](https://github.com/chenshuai2144/merge-value-hooks)]优化`useState`

> -   其中`floating-ui`文档阅读记录见组件备注，有兴趣可查看：https://github.com/cgfeel/ant-design-style/blob/main/src/components/stylish/floating/select/index.tsx
> -   除此之外还有`use-merge-value`，请启动项目，源码解读见”MacOS 选择器“示例下方备注

---- 分割线 ----

### API

#### 创建样式

-   URL: `/create`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/tree/main/src/components/create)]
-   包含章节：
    -   `createStyles`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/create-styles)]
    -   `createStylish`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/create-stylish)]
    -   `createGlobalStyle`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/global-styles)]

**包含：**

-   `createStyles`创建样式、`responsive`响应式处理、`prefixCls` 与 `iconPrefixCls` 前缀覆盖
-   `ClassNameGeneratorOption`：`label` 添加样式后缀，`hashPriority` 样式覆写
-   `createStylish`创建公共样式、`createStylish`实现黏土风 UI
-   `createGlobalStyle`创建全局样式、`createGlobalStyle`结合 `antd` 的 `token` 使用

> 由于目前版本的`antd-style`在使用 `label` 添加样式后缀无效（包含官网案例），所以用`emotion`做了一个对比演示

---- 分割线 ----

#### 容器组件

-   URL: `/provider`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/ProviderCom.tsx)]
-   包含章节：
    -   `ThemeProvider`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/theme-provider)]
    -   `StyleProvider`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/style-provider)]

**包含：**

-   `appearance`设置`theme`
-   `useTheme`获取`token`设置样式，通过 `token` 设置 `theme`，自定义`token`
-   基础样式重置，消费静态实例方法，添加容器作用域样式
-   修改 `container`，修改样式注入点，开启 `speedy` 极速模式

---- 分割线 ----

#### Hooks、高级设置

-   URL: `/hooks`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/HookApi.tsx)]
-   包含章节：
    -   `useTheme`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/use-theme)]
    -   `useThemeMode`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/use-theme-mode)]
    -   `useResponsive`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/use-responsive)]
    -   `createInstance`[[查看](https://ant-design.github.io/antd-style/zh-CN/api/create-instance)]

**包含：**

-   `useTheme`获取`token`设置样式
-   `useThemeMode`获取`theme`信息
-   `useResponsive`获取媒体响应值、通过`theme`修改媒体响应值
-   `createInstance`自定义创建实例、独立样式演示

---- 分割线 ----

#### 服务器渲染、无闪烁切换主题

-   URL: `/apptheme`
-   目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/AppTheme.tsx)]
-   包含章节：
    -   集成 `SSR`[[查看](https://ant-design.github.io/antd-style/zh-CN/guide/ssr)]
    -   暗色模式下首屏会 “闪” 一下[[查看](https://ant-design.github.io/antd-style/zh-CN/best-practice/fix-switch-theme-fouc)]

**包含：**

-   服务端渲染见NextJS记录：https://github.com/cgfeel/next.v2/blob/master/docs/antd-theme.md
-   csr下刷新无闪缩，自适应系统主题，详细见下方总结 [[查看](#csr主题切换无闪烁)]

---- 分割线 ----

## 额外总结

### CSR主题切换无闪烁

演示：

https://github.com/cgfeel/ant-design-style/assets/578141/13ce2c9e-8f37-491e-a90e-79e1379aaf22


- 在入口页的`header`挂起一段`js`，用于在首次打开时读取本地存储的`theme`，并存储系统主题 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/public/theme.js)]
- 设置基础的主题模式 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/global.css)]
- 设置一个`Context Provider`，用收集信息并对`ThemeProvider`做出调整 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/components/appTheme/AppProvider.tsx)]
- 切换主题时需要分别对：`AppContext`、`useThemeMode`做出调整 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/components/appTheme/Controller.tsx)]

`ThemeProvider`的分为两部分

- `defaultThemeMode`：根据用户选择主题的情况，用于展示初始值状态
- `theme`：通过`algorithm`根据情况选择主题算法

修改主题分为两部分：

- 通过`AppContext.Provider`的`change`收集主题更改信息做出调整
- 通过`useEffect`监听`matchMedia`，根据系统变化做出调整

对比之前总结的服务器主题切换的优缺点：

- 优点：无需提前设置`CSS`变量并提权
- 缺点：相对`SSR`可能会有一个会有一个渐进的视觉差（可忽略不计）

`SSR`主题切换 [[查看](https://github.com/cgfeel/next.v2/blob/master/docs/antd-theme.md)]，也可以将CSR的解决方式代替SSR，具体怎么用需要根据实际情况决定

## 如何运行

```
git clone git@github.com:cgfeel/ant-design-style.git
cd ant-design-style
npm install
```

**开发环境**

-   OS: OSX 12.7
-   NodeJS: v21.6.1
-   Environment: create-react-app
-   Other: [package.json](https://github.com/cgfeel/ant-design-style/blob/main/package.json)
