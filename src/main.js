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
// 注册一个全局组件 
import scroller from '@/components/scroller'
Vue.component('scroller',scroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
