import {login, getUserInfo} from '@/api/system'
import {sessionStorage} from '@/modules/storage'
import {TOKEN} from '@/constant/index'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: sessionStorage.get(TOKEN) || '',
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      sessionStorage.set(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({commit}, formData) {
      return new Promise((resolve, reject) => {
        login(formData)
          .then(({token}) => {
            if (!token) return reject()
            commit('setToken', token)
            router.push('/')
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    async getUserInfo({commit}) {
      const result = await getUserInfo()
      commit('setUserInfo', result)
      return result
    }
  }
}
