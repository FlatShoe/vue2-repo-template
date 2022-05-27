import request from '@/request'

// 登陆
export const login = formData => {
  return request.post('/login', formData)
}
// 获取用户信息
export const getUserInfo = () => {
  return request.get('/getUserInfo')
}
