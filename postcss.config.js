module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['van-', 'el-'],
      unitPrecision: 3
    }
  },
  parser: 'postcss-scss'
}
