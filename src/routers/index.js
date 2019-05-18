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
      redirect:'/movie/nowPlaying'
    },
   movieRouter,
   cityRouter,
   personRouter
  ]
})
