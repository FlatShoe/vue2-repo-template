import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock('login', 'post', () => {
  return {
    code: 200,
    success: true,
    data: {
      token: 'xxx'
    }
  }
})
