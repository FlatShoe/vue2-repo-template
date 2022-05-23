import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('../components/inputs', false, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))
  const componentConfig = requireComponent(fileName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})
