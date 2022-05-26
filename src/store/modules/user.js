import {login} from '@/api/system'
import {sessionStorage} from '@/modules/storage'
import {TOKEN} from '@/constant/index'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: sessionStorage.get(TOKEN) || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      sessionStorage.set(TOKEN, token)
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
    }
  }
}
