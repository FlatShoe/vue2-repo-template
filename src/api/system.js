import request from '@/request'

export const login = formData => {
  return request.post('login', formData)
}
