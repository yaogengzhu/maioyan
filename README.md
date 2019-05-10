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

## 如何初始化整个项目 
- 使用`vue-cli`初始化整个项目
- 使用命令 `vue create miaoyan` 
- 没有使用默认配置，是手动配置的。配置的`vue-router`,`vuex`,`node-sass`,`eslint`..

## 技术要点
1.使用`vue.config.js`中配置`proxy`反向数据代理 [具体可以参考](https://cli.vuejs.org/zh/config/#devserver-proxy)，看代码分析 
```js
module.exports = {
  devServer:{
    proxy{
      '/api':{
        target:'url',
        changeOrigin:true
      }
    }
  }
}
```
2.使用axios 发送ajax请求。
```js  
//安装axios    npm i axios -S  
// 引入 
import axios from 'axios'
// 将axios放入Vue原型中 ，以便与好调用 
Vue.prototype.axios = axios
```

## 项目结构分析
本次项目方式全部将采用子组件方式去创建，可以根据目录看到
- `views`文件作为视图层，作为三个大的单页面去实现
- `components` 文件存放自子组件，这些子组件的功能是一次书写，可以多次调用。比如`header`作为头部分的页面，不仅是在单个页面拥有，而且是在其他三个大的单页面同时拥有，这时候就被抽离出来，以便与随时调用。
- `routers` 对于路由组件来说，本来就存在一个`index.js`就已经足够使用，但是为了后续大的项目，本次页将抽离出来。每个页面的路由都抽离作为一个文件存放，以方便管理。
- 可以看看对路由作出来哪些优化
```js 
import Vue from 'vue'
import Router from 'vue-router'
// 为了方便管理，路由也按需加载
import movieRouter from '../routers/movie'
import cityRouter from '../routers/city'
import personRouter from '../routers/person'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/movie'
    },
   movieRouter,
   cityRouter,
   personRouter
  ]
})
```
- 主路由文件的分析，似乎看起来并没有什么大的优化。那么看看子路由是怎么做的
```js
export default {
    path:'/movie',
    component:() => import('@/views/movie')
}
```
- 对于子路由的优化，我们做到来按需加载的形式。如果我们使用以前的方式。这个页面不需要组件的文件也会被加载进来，但是使用`() => import('组件的地址')`。优化之后，对页面也会有一定的提升。