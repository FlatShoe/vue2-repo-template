import SvgIcon from '@/components/SvgIcon'
import Vue from 'vue'
const svgRequire = require.context('@/assets/svg-sprite', true, /\.svg$/)
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
Vue.component(SvgIcon.name, SvgIcon)
