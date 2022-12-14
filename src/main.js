import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
