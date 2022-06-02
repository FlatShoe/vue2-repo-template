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
    redirect: '/profile/inner',
    children: []
  }
]
