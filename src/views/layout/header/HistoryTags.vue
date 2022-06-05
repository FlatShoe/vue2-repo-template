<!--
* @Description 历史路由标签列表
* @Date
-->
<template>
  <div class="history-tags">
    <el-tabs type="card" closable v-model="tagValue" @edit="handleEdit">
      <el-tab-pane :key="item.name" v-for="(item, index) in historyTags" :name="item.name">
        <span slot="label" @contextmenu.prevent="handleOpenMenu($event, index)">
          <router-link class="tag-router" :to="{path: item.fullPath}">
            <i class="route-line route-left-line" v-if="index !== 0"></i>
            {{ item.title }}
          </router-link>
        </span>
      </el-tab-pane>
    </el-tabs>
    <context-menu v-show="contextMenuShow" :menuItems="menuItems" :offset="offset"></context-menu>
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
      tagValue: '',
      contextMenuShow: false,
      menuItems
    }
  },
  computed: {
    ...mapGetters(['historyTags'])
  },
  methods: {
    ...mapMutations('app', ['setHistoryTags']),
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
     */
    handleEdit(tag) {
      console.log(tag)
    },
    /**
     * @Description 打开右键菜单
     */
    handleOpenMenu(e, index) {
      const {x, y} = e
      this.offset = {left: x + 'px', top: y + 'px'}
      this.contextMenuShow = true
    },
    /**
     * @Description 关闭右键菜单
     */
    handleCloseMenu() {
      this.contextMenuShow = false
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
