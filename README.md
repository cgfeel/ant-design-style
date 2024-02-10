## 概括

按照 antd-style 官方文档，最小化复现每个示例。由于开发环境的不同，以及出于自己的理解，对工程文件做了调整，并给出了相应的说明。本项目不提供线上预览，如有需要请参考下方本地运行。

## 示例

### 快速上手

#### 工程文件

-   使用`react-app-rewired`作为启动，编译脚本 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/package.json#L24C1-L29C7)]
-   使用`customize-cra`作为`webpack`配置 [[查看](https://github.com/cgfeel/ant-design-style/blob/main/config-overrides.js)]
    -   包含 2 套解决方案`react-app-rewired`和`customize-cra`
-   在`src`目录下添加`.eslintrc.js`作为`eslint`自定义解决方案 [查看](https://github.com/cgfeel/ant-design-style/blob/main/src/.eslintrc.js)

#### 书写样式

url: `/start`，目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Start.tsx)]

包含：

-   典型用例
-   静态写法
-   使用 `antd` 的 `token`
-   外部传入 `props`
-   分离样式和文件、动画：Keyframes

#### 主题切换

-   url: `/theme`，目录：[[查看](https://github.com/cgfeel/ant-design-style/blob/main/src/page/Theme.tsx)]

主题切换：

-   通过`appearance`设置主题
-   通过`themeMode`跟随系统主题
-   受控模式：使用`useThemeMode`
-   受控模式：通过`zustand`切换主题
-   定制主题：修改主色与紧凑模式
-   定制主题：自定义暗色风格

定义主题：

-   通过 `token` 设置 `theme`
-   通过函数定义主题
-   自定义 `token` 配置
-   通过函数方式调用
-   自定义外观模式

划重点：

-   `themeMode`用来定义主题亮色还是暗色，或者随系统；`appearance`用来定义主题风格
-   但目前相互定义会存在问题，所以多主题、多风格目前可能是个问题
-   `antd-style`有个致命的问题，存在闪屏，如果有要求可以通过`next-theme`代替，这不在本次研究范围

## 如何运行

```
git clone git@github.com:cgfeel/ant-design-style.git
cd ant-design-style
npm install
```

** 开发环境 **

-   OS: OSX 12.7
-   NodeJS: v21.6.1
-   Environment: create-react-app
-   Other: [package.json](https://github.com/cgfeel/ant-design-style/blob/main/package.json)
