import Vue from 'vue'
import VueRouter from 'vue-router'

const UseDataTable = () => import('@/views/components-use-show/UseDataTable.vue')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    component: () => import('@/views/errors/404')
  },
  {
    path: '/components-use-show',
    component: UseDataTable
  }
]

const router = new VueRouter({
  routes
})

export default router