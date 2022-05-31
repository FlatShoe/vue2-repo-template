import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './publicRoutes'
import Layout from '@/views/layout/Layout.vue'

const privateRoutes = [
  {
    path: '/a',
    component: Layout,
    redirect: '/a/a1/',
    meta: {
      title: 'a',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/a/a1',
        name: 'A1',
        meta: {
          title: 'a1',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/a/A-1.vue')
      },
      {
        path: '/a/a2',
        name: 'A2',
        meta: {
          title: 'a2',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/a/A-2.vue')
      }
    ]
  },
  {
    path: '/b',
    component: Layout,
    redirect: '/b/b1',
    meta: {
      title: 'b',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/b/b1',
        meta: {
          title: 'b1',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/b/B-1.vue')
      },
      {
        path: '/b/b2',
        meta: {
          title: 'b2',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/b/B-2.vue')
      }
    ]
  },
  {
    path: '/c',
    component: Layout,
    redirect: '/c/c1',
    meta: {
      title: 'c',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/c/c1',
        meta: {
          title: 'c1',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/c/C-1.vue')
      },
      {
        path: '/c/c2',
        meta: {
          title: 'c2',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/c/C-2.vue')
      }
    ]
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
