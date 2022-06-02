import Vue from 'vue'
import VueRouter from 'vue-router'
import privateRoutes from './privateRoutes'
import publicRoutes from './publicRoutes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
