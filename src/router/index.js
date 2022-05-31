import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './publicRoutes'
import Layout from '@/views/layout/Layout.vue'

const privateRoutes = [
  {
    path: '/a',
    name: 'A',
    component: Layout,
    redirect: '/a/a1',
    meta: {
      title: 'a',
      icon: 'test'
    },
    children: [
      {
        path: '/a/a1',
        name: 'A1',
        meta: {
          title: 'a1',
          icon: 'test'
        },
        component: () => import('@/views/a/A-1.vue')
      },
      {
        path: '/a/a2',
        name: 'A2',
        meta: {
          title: 'a2',
          icon: 'test'
        },
        component: () => import('@/views/a/A-2.vue')
      }
    ]
  },
  {
    path: '/b',
    name: 'B',
    component: Layout,
    redirect: '/b/b1',
    meta: {
      title: 'b',
      icon: 'test'
    },
    children: [
      {
        path: '/b/b1',
        meta: {
          title: 'b1',
          icon: 'test'
        },
        component: () => import('@/views/b/B-1.vue')
      },
      {
        path: '/b/b2',
        meta: {
          title: 'b2',
          icon: 'test'
        },
        component: () => import('@/views/b/B-2.vue')
      }
    ]
  },
  {
    path: '/c',
    name: 'C',
    component: Layout,
    redirect: '/c/c1',
    meta: {
      title: 'c',
      icon: 'test'
    },
    children: [
      {
        path: '/c/c1',
        meta: {
          title: 'c1',
          icon: 'test'
        },
        component: () => import('@/views/c/C-1.vue')
      },
      {
        path: '/c/c2',
        meta: {
          title: 'c2',
          icon: 'test'
        },
        component: () => import('@/views/c/C-2.vue')
      }
    ]
  },
  {
    path: '/d',
    name: 'd',
    component: Layout,
    children: [
      {
        path: '/d/d1',
        meta: {
          title: 'd1',
          icon: 'test'
        },
        component: () => import('@/views/components-use-show/UseBreadcrumb.vue'),
        children: [
          {
            path: '/d/d1/d1-1',
            name: 'A1-1',
            meta: {
              activeMenu: '/d/d1'
            },
            component: () => import('@/views/a/A-1-1.vue')
          }
        ]
      }
    ]
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
