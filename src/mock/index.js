import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock('/api/user/login', 'post', () => {
  return {
    code: 200,
    success: true,
    data: {
      token: 'xxx'
    }
  }
})
