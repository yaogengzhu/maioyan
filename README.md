# 喵眼电影项目（基于vue开发）
该项目采用的是vue开发，ui没有使用任何框架。完全手写～

## 使用指导
- `git pull  项目地址` 到本地
- `npm i `
- `npm run serve` 便可以开启项目

## 文件目录树
```md
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public (存放公共文件)
│   ├── css
│   │   └── reset.css
│   ├── favicon.ico
│   ├── font (字体图表文件)
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   ├── iconfont.woff
│   │   └── iconfont.woff2
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets (存放一些图片等)
│   │   ├── CityHall.png
│   │   ├── lazy1.jpg
│   │   ├── max.png
│   │   ├── message.png
│   │   ├── movie.jpg
│   │   ├── movie.png
│   │   └── personal.png
│   ├── components(子组件)
│   │   ├── cityIndex
│   │   ├── footer
│   │   ├── header
│   │   ├── js
│   │   ├── loading
│   │   ├── movieIndex
│   │   ├── personIndex
│   │   └── scroller
│   ├── main.js（入口文件）
│   ├── routers (路由文件)
│   │   ├── city
│   │   ├── index.js
│   │   ├── movie
│   │   └── person
│   ├── stores (状态管理文件)
│   │   ├── city
│   │   └── index.js
│   └── views （主要示图文件）
│       ├── city
│       ├── movie
│       └── person
├── tree.md
└── vue.config.js
```

## 如何初始化整个项目 
- 使用`vue-cli`初始化整个项目
- 使用命令 `vue create miaoyan` 
- 没有使用默认配置，是手动配置的。配置的`vue-router`,`vuex`,`node-sass`,`eslint`..

## 项目接口文件 
  | 接口名称 | 请求方式 | 请求示列 |
  | --- | ---- | ---- |
  | 正在热映 | get | http://39.97.33.178/api/movieOnInfoList?cityId=10 |
  | 即将上映 | get | http://39.97.33.178/api/movieComingList?cityId=10 |
  | 搜索 | get | http://39.97.33.178/api/searchList?cityId=10&kw=a |
  | 城市 | get | http://39.97.33.178/api/cityList |
  | 电影详情 | get | http://39.97.33.178/api/detailmovie?movieId=345808 |
  | 影院 | get | http://39.97.33.178/api/cinemaList?cityId=10 |
  | 城市定位 | get | http://39.97.33.178/api/getLocation |

## 技术要点
- [x] `vue`
- [x] `vuex`
- [x] `vue-router`
- [x] `better-scroll`
- [x] `proxy`
- [x] `axios`

## 静态页面展示 

#### 本项目一共八个静态页面，没有做其他扩展～涵盖了聚多的知识点知识！

<figure class="third">

<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p1.png?raw=true" width=200 height=400 alt="图1">
<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p2.png?raw=true" width=200 height=400 alt="图2">
<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p3.png?raw=true" width=200 height=400 alt="图3">

</figure>

<figure class="third">

<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p4.png?raw=true" width=200 height=400 alt="图4">
<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p5.png?raw=true" width=200 height=400 alt="图5">
<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p6.png?raw=true" width=200 height=400 alt="图6">

</figure>

<figure class="two">

<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p7.png?raw=true" width=200 height=400 alt="图7">
<img src="https://github.com/yaogengzhu/maioyan/blob/master/showImage/p8.png?raw=true" width=200 height=400 alt="图8">

</figure >

## 部分技术要点分析
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
## 本文一共
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


#### 对于路由组件传递参数

```js
 {
  path: 'detail/:movieId',
    components: {
    detail: () => import('@/views/movie/detail.vue'),
    }
 }
```
对于上面这种写法， 我们可以在传递过去的组件中，直接使用`this.$route.params.movieId`接受参数。通过查阅资料，有一定的缺陷。
在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
故我们可以采取`props`将路由组件解偶。
```js
{
  path: 'detail/:movieId',
    components: {
      detail: () => import('@/views/movie/detail.vue'),
    },
    props: {
      detail: true
    }
}
```
组件接收方式
```js
export default {
  name: "detail",
  props: ['movieId'],
  components: {
    Header
  },
  mounted() {
    // 这种方式也可以传递id过来，在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
    // console.log(this.$route.params.movieId)
    console.log(this.movieId)
  },
}
```
这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

[参考官方文档](https://router.vuejs.org/zh/guide/essentials/passing-props.html)