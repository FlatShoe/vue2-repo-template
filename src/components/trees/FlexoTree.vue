<!--
* @Description 多功能树
* @Date
-->
<template>
  <div class="flexo-tree">
    <el-tree
      v-if="data.length"
      class="tree-root"
      ref="treeRef"
      :empty-text="emptyText"
      :default-expand-all="expandAll"
      :show-checkbox="showCheckbox"
      :node-key="nodeKey"
      :data="data"
      :props="defaultProps"
      :check-strictly="checkStrictly"
      :expand-on-click-node="expandOnClickNode"
      :highlight-current="highlightCurrent"
      :default-checked-keys="defaultCheckedKeys"
      :render-content="renderContent"
      @check="check"
    ></el-tree>
    <span class="tree-empty" v-else>{{ emptyText }}</span>
  </div>
</template>

<script>
function fn(h, {node, data}) {
  const {label} = node
  return (
    <div class="custom-tree-node" on-click={this.nodeClick.bind(this, {node, data, type: 'click'})}>
      <span>{label}</span>
    </div>
  )
}

import _ from 'lodash'
export default {
  name: 'FlexoTree',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    // 是否展开全部
    expandAll: {
      type: Boolean,
      default: true
    },
    // 多选框模式
    showCheckbox: {
      type: Boolean,
      default: false
    },
    // 多选框下进行多选
    isMultiple: {
      type: Boolean,
      default: false
    },
    // 点击节点可以进行折叠
    expandOnClickNode: {
      type: Boolean,
      default: false
    },
    // 节点标识字段
    nodeKey: {
      type: String,
      default: 'id'
    },
    // 默认数据对应字段
    defaultProps: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'name'
        }
      }
    },
    // 多选框模式下是否父子关联
    checkStrictly: {
      type: Boolean,
      default: false
    },
    // 默认勾选的数组
    defaultCheckedKeys: {
      type: Array,
      default() {
        return []
      }
    },
    // 高亮显示当前项
    highlightCurrent: {
      type: Boolean,
      default: true
    },
    // 函数模版
    render: {
      type: Function,
      default(h, {node, data}) {
        const {label} = data
        return (
          <div
            class="custom-tree-node"
            on-click={this.nodeClick.bind(this, {node, data, type: 'click'})}
          >
            <span>{label}</span>
          </div>
        )
      }
    }
  },
  data() {
    return {
      data: [],
      currentId: ''
    }
  },
  methods: {
    _cloneTree() {
      const data = _.cloneDeep(this.treeData)
      this.data = data
    },
    /*
     * @Description 选择节点
     */
    check(data) {
      const isMultiple = this.isMultiple,
        currentId = this.currentId,
        {id} = data
      if (!isMultiple && id === this.currentId) {
        this.$refs.treeRef.setCheckedKeys([])
        this.$refs.treeRef.setCheckedNodes([])
        this.currentId = ''
      }
      if (!isMultiple && id !== currentId) {
        this.$refs.treeRef.setCheckedKeys([])
        this.$refs.treeRef.setCheckedKeys([id])
        this.$refs.treeRef.setCheckedNodes([data])
        this.currentId = id
      }
      this.checkedNodes = this.$refs.treeRef.getCheckedNodes()
      this.$emit('check', this.checkedNodes)
    },
    /*
     * @Description 点击当前节点
     * @param {Object} node 当前节点相关信息 data 当前节点相关数据 type 操作类型
     */
    nodeClick({node, data, type}) {
      this.$emit('node-click', {node, data, type})
    },
    /*
     * @Description 获取已被选择的节点 提供外部使用
     */
    getCheckedKeys() {
      return this.$refs.treeRef.getCheckedKeys()
    },
    clearNode() {
      const dataCopy = JSON.parse(JSON.stringify(this.data))
      this.data = []
      this.data = dataCopy
      this.currentId = null
      this.$nextTick(() => {
        this.$refs.treeRef.setCheckedKeys([])
        this.$refs.treeRef.setCheckedNodes([])
      })
    },
    /**
     * 通过render函数渲染内容
     */
    renderContent(h, {node, data, store}) {
      return this.render.call(this, h, {
        node,
        data,
        store
      })
    }
  },
  watch: {
    treeData: {
      handler() {
        this._cloneTree()
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.flexo-tree {
  position: relative;
  height: 100%;
  .el-tree {
    display: inline-block;
    min-width: 100%;
    background-color: transparent;
  }
  .el-tree-node__content {
    padding: 3px;
  }
  .el-tree-node > .el-tree-node__children {
    overflow: inherit;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .tree-empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: #606266;
  }
}
</style>
