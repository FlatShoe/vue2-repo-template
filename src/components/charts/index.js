import _ from 'lodash'
import './index.scss'
export default {
  name: 'Chart',
  render(h) {
    return h(
      'div',
      {
        class: [_.camelCase(this.$options.name || this.$options._componentTag)],
        style: this.chartStyle
      },
      [
        h('div', {
          style: this.chartStyle,
          ref: 'canvas'
        }),
        h(
          'div',
          {
            class: 'chart-attachment',
            style: {display: this.loading || this.empty ? '' : 'none'}
          },
          [
            h('div', {
              class: 'chart-loading',
              style: {display: this.loading ? '' : 'none'},
              directives: [
                {
                  name: 'loading',
                  value: true
                }
              ]
            }),
            h(
              'span',
              {
                class: 'chart-empty',
                style: {
                  display: this.empty && !this.loading ? '' : 'none'
                }
              },
              this.emptyText
            )
          ]
        ),
        this.$slots.default
      ]
    )
  },
  props: {
    width: {type: String, default: 'auto'},
    height: {type: String, default: '400px'},
    loading: {type: Boolean, default: false},
    empty: {type: Boolean, default: false},
    emptyText: {type: String, default: '暂无数据'},
    resizeable: {type: Boolean, default: true},
    resizeDelay: {type: Number, default: 200},
    option: {type: Object, required: true}
  },
  computed: {
    chartStyle() {
      return {
        width: this.width,
        height: this.height,
        position: 'relative'
      }
    }
  },
  methods: {
    init() {
      if (this.echarts) return
      this.echarts = this.$echarts.init(this.$refs.canvas)
      if (this.resizeable) this.resize()
    },
    echartsResize() {
      this.echarts.resize()
    },
    resize() {
      window.addEventListener('resize', this.resizeHandler)
    },
    clear() {
      if (this.resizeable) window.removeEventListener('resize', this.resizeHandler)
      this.echarts.dispose()
    }
  },
  watch: {
    option: {
      handler(val) {
        if (val && this.echarts) this.echarts.setOption(val)
      },
      deep: true
    },
    width: {
      handler(val) {
        this.$nextTick(() => {
          this.echartsResize()
        })
      }
    },
    height: {
      handler(val) {
        this.$nextTick(() => {
          this.echartsResize()
        })
      }
    }
  },
  created() {
    this.resizeHandler = _.debounce(this.echartsResize, this.resizeDelay)
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.clear()
  }
}
