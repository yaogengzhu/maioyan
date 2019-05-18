import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '../public/css/reset.css'
import axios  from 'axios'
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
