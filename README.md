# 喵眼

## 使用指导
- `git pull  项目地址` 到本地
- `npm i `
- `npm run serve` 便可以开启项目

## 文件目录树
```md
├── README.md 
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── reset.css
│   ├── favicon.ico
│   └── index.html
├── src 
│   ├── App.vue
│   ├── assets （存放一些图片，字体图标）
│   │   ├── message.png
│   │   ├── movie.png
│   │   └── personal.png
│   ├── components （子组件）
│   │   ├── footer
│   │   └── header
│   ├── main.js （核心部分，配置中心）
│   ├── routers （路由文件）
│   │   ├── city
│   │   ├── index.js
│   │   ├── movie
│   │   └── person
│   ├── stores (vuex 数据文件)
    │   └── index.js
    └── views （视图层文件）
        ├── city
        ├── movie
        └── person
```

## 初始化整个项目 
- 使用`vue-cli`初始化整个项目 `vue create miaoyan` ,没有使用默认配置，是手动配置的。配置的`vue-router`,`vuex`,`node-sass`,`eslint`..
