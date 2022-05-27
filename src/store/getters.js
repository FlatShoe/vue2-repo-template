import _ from 'lodash'
export default {
  token: state => state.system.token,
  hasUserInfo: state => !_.isEmpty(state.system.userInfo)
}
