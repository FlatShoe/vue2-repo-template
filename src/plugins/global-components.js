import Vue from 'vue'
import _ from 'lodash'
import SvgIcon from '@/components/SvgIcon'

const requireComponent = require.context('../components/inputs', false, /[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(fileName => {
  const componentName = _.upperFirst(_.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))
  const componentConfig = requireComponent(fileName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})

const svgRequire = require.context('@/assets/svg-sprite', true, /\.svg$/)
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
Vue.component(SvgIcon.name, SvgIcon)
