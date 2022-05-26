import request from '@/request'

export const login = data => {
  request.post('login', {
    account: 'admin',
    password: '123'
  })
}
