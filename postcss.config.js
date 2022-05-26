module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [],
      unitPrecision: 3
    }
  },
  parser: 'postcss-scss'
}
