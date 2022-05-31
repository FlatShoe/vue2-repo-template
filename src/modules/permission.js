import router from '@/router'
import store from '@/store'
import {LOGINPATH} from '@/constant/index'
import whiteList from './whiteList'

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === LOGINPATH) {
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
      next(LOGINPATH)
    }
  }
})
