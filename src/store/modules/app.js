export default {
  namespaced: true,
  state: {
    sidebarStatus: true
  },
  mutations: {
    setSidebarStatus(state, status) {
      state.sidebarStatus = status
    }
  }
}
