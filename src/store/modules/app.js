import {HISTORY_TAGS} from '@/constant'
import {sessionStorage} from '@/modules/storage'
export default {
  namespaced: true,
  state: {
    sidebarStatus: true,
    historyTags: []
  },
  mutations: {
    setSidebarStatus(state, status) {
      state.sidebarStatus = status
    },
    setHistoryTags(state, tag) {
      const isHas = state.historyTags.find(item => tag.path === item.path)
      if (!isHas) {
        state.historyTags.push(tag)
        sessionStorage.set(HISTORY_TAGS, state.historyTags)
      }
    }
  }
}
