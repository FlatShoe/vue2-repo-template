import Layout from '@/views/layout/Layout.vue'
export default [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "errors-404" */ '@/views/errors/404')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/components-use-data-table',
    children: [
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
      }
    ]
  }
]
