import Vue from 'vue'
import App from './App.vue'
// 导入vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载
  store
}).$mount('#app')
