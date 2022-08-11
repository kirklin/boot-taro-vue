<div align='center'>
<h1>MiniProgram Boot</h1>
</div>

<p align='center'>
使用 mini-program-boot 快速地创建 Web 应用
</p>

<div align='center'>
<a href="README.en.md">English</a> | <a href="README.md">简体中文</a>
</div>

## 特性

- ⚡ [Vue 3](https://github.com/vuejs/vue-next)
- 💪 [Typescript](https://www.typescriptlang.org/) - 强大的类型检查
- 💡 [Taro v3](https://taro.js.org/) - 开放式跨端跨框架解决方案，轻松构建可以运行在 小程序/Web/APP 上的应用
- 🎨 [Tailwind/WindiCSS](https://tailwindcss.com/docs/configuration) - 快速建立现代网站，而不必离开 HTML。
- 🌼 [Daisy](https://daisyui.com/) - 开源的 Tailwind CSS 组件库

### 编码风格

- [Eslint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - 使用 Prettier 自动分类 TailWind 类名

### 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 快来试试吧！！

### GitHub 模板

[使用这个模板创建仓库](https://github.com/kirklin/mini-program-boot/generate).

### 克隆到本地

```bash
npx degit kirklin/mini-program-boot my-mini-program-app
cd my-mini-program-app
yarn install
```

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:10086 中看到
```bash
npm run dev:h5
```
只需要执行以下命令就可以导入微信小程序开发者工具，并实时监控代码变化
```bash
npm run dev:webapp
```

### 构建

构建该应用只需要执行以下命令

```bash
npm run build:webapp
```

然后你会看到用于发布的 `dist` 文件夹被生成，导入微信开发者工具即可。
