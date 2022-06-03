import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuebar from 'vuebar'
import './global'
import './modules/permission'
import './plugins/element.js'
import './utils/rem.js'
import 'nprogress/nprogress.css'
import './assets/style/index.scss'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

Vue.use(Vuebar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
