import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuebar from 'vuebar'
import './assets/style/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

Vue.use(Vuebar)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
