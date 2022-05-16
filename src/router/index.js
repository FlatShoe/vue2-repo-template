import Vue from 'vue'
import VueRouter from 'vue-router'

const UseDataTable = () => import('@/views/components-use-show/UseDataTable.vue')
const UseBreadcrumb = () => import('@/views/components-use-show/UseBreadcrumb.vue')
const UseFormDialog = () => import('@/views/components-use-show/UseFormDialog.vue')
const UseLeftRightPage = () => import('@/views/components-use-show/UseLeftRightPage.vue')

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
  },
  {
    path: '/components-use-form-dialog',
    component: UseFormDialog
  },
  {
    path: '/components-use-left-right-page',
    component: UseLeftRightPage
  }
]

const router = new VueRouter({
  routes
})

export default router