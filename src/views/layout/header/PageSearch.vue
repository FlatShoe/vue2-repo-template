<!-- 
* @Description 页面检索
* @Date
-->
<template>
  <div class="page-search" :class="{'search-input-show': isShow}" @click="handleClick">
    <img src="@/assets/images/search.png" />
    <el-select
      class="page-search-select"
      ref="SelectRef"
      placeholder="页面检索"
      filterable
      default-first-option
      remote
      v-model="keyword"
      :remote-method="remoteSearch"
      @change="change"
    >
      <el-option
        v-for="option in options"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'PageSearch',
  data() {
    return {
      isShow: false,
      keyword: '',
      options: []
    }
  },
  methods: {
    /**
     * @Description 点击显示隐藏搜索框
     */
    handleClick() {
      this.isShow = !this.isShow
    },
    /**
     * @Description 选中搜索项
     */
    change() {},
    /**
     * @Description 内容检索
     */
    remoteSearch() {}
  }
}
</script>

<style lang="scss">
.page-search {
  .el-input__inner {
    border-radius: 0;
    border: 0;
    padding-left: 0;
    padding-right: 0 !important;
    box-shadow: none !important;
    border-bottom: 1px solid #d9d9d9;
    vertical-align: middle;
    background-color: transparent;
  }
}
</style>
<style lang="scss" scoped>
.page-search {
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .page-search-select {
    font-size: 18px;
    transition: width 0.4s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
  }
  &.search-input-show {
    .page-search-select {
      width: 180px;
    }
  }
}
</style>
