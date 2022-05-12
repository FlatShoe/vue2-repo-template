import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    component: () => import('@/views/errors/404')
  }
]

const router = new VueRouter({
  routes
})

export default router