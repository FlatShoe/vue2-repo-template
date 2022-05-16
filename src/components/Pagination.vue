<!-- 
* @Description 分页组建
* @Date 2022-05-16
-->
<template>
  <div class="pagination-wrapper">
    <el-pagination
      :background="paginationBackground"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    paginationBackground: {
      type: Boolean,
      default: true
    },
    layout: {
      type: String,
      default: 'sizes, prev, pager, next, total'
    },
    pageSizes: {
      type: Array,
      default() {
        return [20, 50, 100, 200]
      }
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    isDirectUse: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    sizeChange(size) {
      this.$emit('page-size-change', size)
    },
    currentChange(current) {
      if (this.isDirectUse) {
        this.$emit('page-change', current)
      } else {
        this.$emit('current-change', current)
      }
    },
    prevClick(current) {
      if (this.isDirectUse) {
        this.$emit('page-change', current)
      } else {
        this.$emit('prev-click', current)
      }
    },
    nextClick(current) {
      if (this.isDirectUse) {
        this.$emit('page-change', current)
      } else {
        this.$emit('next-click', current)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .pagination-wrapper {
    box-sizing: border-box;
    padding: 5px 10px;
  }
</style>
