import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './publicRoutes'
const routes = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "errors-404" */ '@/views/errors/404')
  },
  {
    path: '/components-use-data-table',
    component: () => import('@/views/components-use-show/UseDataTable.vue')
  },
  {
    path: '/components-use-breadcrumb',
    component: () => import('@/views/components-use-show/UseBreadcrumb.vue')
  },
  {
    path: '/components-use-form-dialog',
    component: () => import('@/views/components-use-show/UseFormDialog.vue')
  },
  {
    path: '/components-use-left-right-page',
    component: () => import('@/views/components-use-show/UseLeftRightPage.vue')
  },
  {
    path: '/components-use-scroll-view',
    component: () => import('@/views/components-use-show/UseScrollView.vue')
  },
  {
    path: '/components-use-page-card',
    component: () => import('@/views/components-use-show/UsePageCard.vue')
  },
  {
    path: '/components-use-concision-form',
    component: () => import('@/views/components-use-show/UseConcisionForm.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout/Layout.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/Home')
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes: publicRoutes
})

export default router
