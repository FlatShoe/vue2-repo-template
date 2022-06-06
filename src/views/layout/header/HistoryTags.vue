<!--
* @Description 历史路由标签列表
* @Date
-->
<template>
  <div class="history-tags">
    <el-tabs type="card" :closable="historyTags.length > 1" v-model="tagValue" @edit="handleEdit">
      <el-tab-pane :key="item.name" v-for="(item, index) in historyTags" :name="item.fullPath">
        <span slot="label" @contextmenu.prevent="handleOpenMenu($event, item.fullPath, index)">
          <router-link class="tag-router" :to="{path: item.fullPath}">
            <i class="route-line route-left-line" v-if="index !== 0"></i>
            {{ item.title }}
          </router-link>
        </span>
      </el-tab-pane>
    </el-tabs>
    <context-menu
      v-show="contextMenuShow"
      :menuItems="menuItems"
      :offset="offset"
      @emitRefresh="$router.go(0)"
      @emitCloseLeft="handleCloseLeft"
      @emitCloseRight="handleCloseRight"
      @emitCloseOther="handleCloseOther"
    ></context-menu>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import whiteList from '@/modules/whiteList'
import ContextMenu from '@/components/ContextMenu'

const menuItems = [
  {
    label: '刷新',
    name: 'refresh',
    emit: 'emitRefresh'
  },
  {
    label: '关闭左侧',
    name: 'closeLeft',
    emit: 'emitCloseLeft'
  },
  {
    label: '关闭右侧',
    name: 'closeRight',
    emit: 'emitCloseRight'
  },
  {
    label: '关闭其他',
    name: 'closeOther',
    emit: 'emitCloseOther'
  }
]

export default {
  name: 'HistoryTags',
  components: {
    ContextMenu
  },
  data() {
    return {
      offset: {
        top: '0px',
        left: '0px'
      },
      contextPath: '',
      contextIndex: -1,
      tagValue: '',
      contextMenuShow: false
    }
  },
  computed: {
    ...mapGetters(['historyTags']),
    menuItems() {
      if (this.historyTags.length === 1) {
        return [menuItems[0]]
      }
      if (this.contextIndex === 0) {
        return [menuItems[0], menuItems[2]]
      } else if (this.contextIndex === this.historyTags.length - 1) {
        return [menuItems[0], menuItems[1]]
      }
      return menuItems
    }
  },
  methods: {
    ...mapMutations('app', ['setHistoryTags', 'removeTags']),
    /**
     * @description 计算需要将要跳转的路径
     * @param {Object} params
     */
    computedPath(params) {
      const {type, fullPath, index} = params
      let path
      const routeFullPath = this.$route.fullPath
      const routeIndex = this.historyTags.findIndex(item => item.fullPath === routeFullPath)
      if (type === 'current') {
        if (fullPath === routeFullPath) {
          path =
            index === 0 || index !== this.historyTags.length - 1
              ? this.historyTags[index + 1].fullPath
              : this.historyTags[index - 1].fullPath
        }
      } else if (type === 'left') {
        path = routeIndex < index ? fullPath : ''
      } else if (type === 'right') {
        path = routeIndex > index ? fullPath : ''
      } else if (type === 'other') {
        path = fullPath !== routeFullPath ? fullPath : ''
      }
      return path
    },
    /**
     * @Description 生成路由标签
     * @param {Object} route 路由
     * @return Object
     */
    generateTag(route) {
      let title = ''
      const {fullPath, meta, name, params, path, query} = route
      if (!route.meta) {
        const pathArr = route.path.split('/')
        title = pathArr[pathArr.length - 1]
      } else {
        title = meta.title
      }
      return {
        name,
        path,
        fullPath,
        title,
        params,
        query
      }
    },
    /**
     * @Description 操作编辑
     * @param {String} fullPath 路径
     */
    handleEdit(fullPath) {
      const index = this.historyTags.findIndex(tag => tag.fullPath === fullPath)
      if (index > -1) {
        const temp = {
          type: 'current',
          index
        }
        const to = this.computedPath({...temp, fullPath})
        this.removeTags({
          ...temp,
          to
        })
      }
    },
    /**
     * @Description 打开右键菜单
     */
    handleOpenMenu(e, path, index) {
      const {x, y} = e
      this.offset = {left: x + 'px', top: y + 'px'}
      this.contextPath = path
      this.contextIndex = index
      this.contextMenuShow = true
    },
    /**
     * @Description 关闭右键菜单
     */
    handleCloseMenu() {
      this.contextMenuShow = false
    },
    /**
     * @Description 关闭左侧标签
     */
    handleCloseLeft() {
      const temp = {
        type: 'left',
        index: this.contextIndex
      }
      const to = this.computedPath({...temp, fullPath: this.contextPath})
      this.removeTags({
        ...temp,
        to
      })
    },
    /**
     * @Description 关闭右侧标签
     */
    handleCloseRight() {
      const temp = {
        type: 'right',
        index: this.contextIndex
      }
      const to = this.computedPath({...temp, fullPath: this.contextPath})
      this.removeTags({
        ...temp,
        to
      })
    },
    /**
     * @Description 关闭其他标签
     */
    handleCloseOther() {
      const temp = {
        type: 'other',
        index: this.contextIndex
      }
      const to = this.computedPath({...temp, fullPath: this.contextPath})
      this.removeTags({
        ...temp,
        to
      })
    }
  },
  watch: {
    $route: {
      handler(to) {
        if (whiteList.includes(to.path)) return
        this.setHistoryTags(this.generateTag(to))
      },
      immediate: true
    },
    contextMenuShow(isShow) {
      if (isShow) return document.addEventListener('click', this.handleCloseMenu)
      document.removeEventListener('click', this.handleCloseMenu)
    }
  }
}
</script>

<style lang="scss">
.history-tags {
  .el-tabs__header {
    margin-bottom: 0;
  }
  .el-tabs__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    border: none !important;
    padding: 0 !important;
    span {
      color: #fff;
      a {
        color: #fff !important;
        background-color: rgba(36, 49, 68, 0.3);
        padding: 0 20px;
        border-radius: 8px;
        border: 1px solid transparent;
      }
      &:first-child {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .el-icon-close {
      position: absolute !important;
      top: 50% !important;
      right: 15px !important;
      transform: translateY(-50%);
      font-size: 16px !important;
      width: 14px !important;
    }
  }
  .el-tabs__nav {
    display: flex;
    border: none !important;
  }
  .el-tabs__header {
    border: none !important;
  }
  .el-tabs__nav-wrap {
    margin: 0;
  }
}
</style>
<style lang="scss" scoped>
.history-tags {
  a {
    text-decoration: none;
  }
  user-select: none;
  height: 100%;
  overflow: hidden;
  .tag-router {
    position: relative;
    display: flex;
    align-items: center;
    width: 232px;
    height: 100%;
    box-sizing: border-box;
    background: rgba(36, 49, 68, 0.1);
    border-radius: 0;
    &:hover {
      background: rgba(36, 49, 68, 0.3) !important;
    }
    .route-line {
      position: absolute;
      width: 1px;
      height: 28px;
      &.route-left-line {
        left: -1px;
        background-color: #fff;
      }
    }
    &.router-link-active {
      background: rgba(36, 49, 68, 0.3);
      .route-left-line {
        background-color: transparent;
      }
    }
  }
}
</style>
