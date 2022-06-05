import NProgress from 'nprogress'
import router from '@/router'
import store from '@/store'
import {LOGIN_PATH} from '@/constant/index'
import whiteList from './whiteList'
NProgress.configure({showSpinner: false})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (store.getters.token) {
    if (to.path === LOGIN_PATH) {
      next({path: '/'})
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('system/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(LOGIN_PATH)
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
