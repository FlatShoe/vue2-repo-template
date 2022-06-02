/*
 * @Description loading
 */
export default {
  name: 'loading',
  directive: {
    bind: (el, binding, vnode) => {
      const {value: isLoading} = binding
      const that = vnode.context
      const mask = document.createElement('div')
      mask.className = 'loading-mask'
      const loginIcon = document.createElement('span')
      loginIcon.className = 'el-icon-loading'
      mask.appendChild(loginIcon)
      el.loadingMask = mask
      if (isLoading) {
        el.appendChild(el.loadingMask)
      }
      that.$nextTick(() => {
        const curStyle = window.getComputedStyle(el)
        const position = curStyle.position
        if (position == 'static') {
          el.style.position = 'relative'
        } else {
          el.style.position = position
        }
      })
    },
    update: (el, binding) => {
      const {value: isLoading} = binding
      if (isLoading) {
        if (!el.loadingMask.parentNode) {
          el.appendChild(el.loadingMask)
        }
      } else {
        if (el.loadingMask.parentNode === el) {
          el.removeChild(el.loadingMask)
        }
      }
    }
  }
}
