'use strcit'
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./build/webpack.prod')

try {
  webpack(webpackConfig, (error, stats) => {
    if (error) {
      console.log(chalk.red(`${error.message}`))
      process.exit(1)
    }
    console.info(stats)
    console.info(chalk.green('Build completed successfully.\n'))
  })
} catch (error) {
  console.log(chalk.red('Build failed with errors.\n'))
  process.exit(1)
}
