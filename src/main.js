import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '../public/css/reset.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
