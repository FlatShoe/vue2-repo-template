import Layout from '@/views/layout/Layout.vue'
export default {
  path: '/charts-view',
  name: 'ChartsView',
  component: Layout,
  redirect: '/charts-view/inner',
  children: [
    {
      path: '/charts-view/inner',
      name: 'ChartsViewInner',
      meta: {
        title: '图表',
        icon: 'article',
        primary: true
      },
      component: () => import('@/views/charts-view/ChartsView.vue')
    }
  ]
}
