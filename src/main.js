import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '../public/css/reset.css'
import axios  from 'axios'
// 引入图片懒加载 
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
// // or with options 也可以直接在这里设置参数
// Vue.use(VueLazyload, {  
//   preLoad: 1.3,   //预加载的宽高比
//   error: '@/assets/lazy1.jpg',//图片加载失败时使用的图片源
//   loading: '@/assets/lazy1.jpg',//图片加载的路径
//   attempt: 1//尝试加载次数
// })
Vue.config.productionTip = false
// 配置axios  
Vue.prototype.axios = axios

// 写一个全局过滤  
Vue.filter('imgFormat', (url, arg) =>{
  return url.replace(/w\.h/,arg)
})
// 注册一个全局滑动组件 
import scroller from '@/components/scroller'
Vue.component('scroller',scroller)
// 注册一个全局的loading组件
import loading from '@/components/loading'
Vue.component('loading',loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
