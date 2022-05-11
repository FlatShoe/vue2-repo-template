import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '*',
    component: () => import('../views/errors/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router