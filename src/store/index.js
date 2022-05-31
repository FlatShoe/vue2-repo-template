import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import app from './modules/app'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    app,
    system
  }
})

export default store
