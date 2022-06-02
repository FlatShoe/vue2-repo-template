import Layout from '@/views/layout/Layout.vue'
export default {
  path: '/profile',
  name: 'Profile',
  component: Layout,
  redirect: '/profile/inner',
  children: [
    {
      path: '/profile/inner',
      name: 'ProfileInner',
      meta: {
        title: '个人中心',
        icon: 'profile'
      },
      component: () => import('@/views/profile/ProfileInner.vue')
    }
  ]
}
