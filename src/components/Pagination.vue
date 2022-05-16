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
      @size-change="$emit('page-size-change', $event)"
      @current-change="$emit('page-change', $event)"
      @prev-click="$emit('page-change', $event)"
      @next-click="$emit('page-change', $event)"
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
