'use strcit'
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./build/webpack.prod')

webpack(webpackConfig, (err, stats) => {
  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  }
  console.log(chalk.green('Build completed successfully.\n'))
})