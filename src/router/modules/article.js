import Layout from '@/views/layout/Layout.vue'
export default {
  path: '/article',
  name: 'Article',
  component: Layout,
  redirect: '/article/list',
  meta: {
    title: '文章',
    icon: 'article',
    primary: true
  },
  children: [
    {
      path: '/article/list',
      name: 'ArticleList',
      meta: {
        title: '文章列表',
        primary: true
      },
      redirect: '/article/detail',
      component: () => import('@/views/article/article-list/ArticleList.vue'),
      children: [
        {
          path: '/article/detail',
          name: 'ArticleDetail',
          meta: {
            title: '文章详情',
            primary: true
          },
          component: () => import('@/views/article/article-detail/ArticleDetail.vue')
        }
      ]
    },
    {
      path: '/article/recommend',
      name: 'ArticleRecommend',
      meta: {
        title: '推荐文章',
        primary: true
      },
      component: () => import('@/views/article/article-recommend/ArticleRecommend.vue')
    }
  ]
}
