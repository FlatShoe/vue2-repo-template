<!-- 
* @Description 面包屑
* @Date 2022-05-16
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator="separator">
      <el-breadcrumb-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.path"
        :replace="item.replace"
      >
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>
