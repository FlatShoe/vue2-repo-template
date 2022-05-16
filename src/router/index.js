import Vue from 'vue'
import VueRouter from 'vue-router'

const UseDataTable = () => import('@/views/components-use-show/UseDataTable.vue')
const UseBreadcrumb = () => import('@/views/components-use-show/UseBreadcrumb.vue')

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
    path: '/components-use-data-table',
    component: UseDataTable
  },
  {
    path: '/components-use-breadcrumb',
    component: UseBreadcrumb
  }
]

const router = new VueRouter({
  routes
})

export default router