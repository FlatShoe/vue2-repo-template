<!-- 
* @Description 
* @Date
-->
<template>
  <div class="use-breadcrumb">
    <breadcrumb :items="items" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'UseBreadcrumb',
  components: {
    Breadcrumb
  },
  data() {
    return {
      items: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '组件',
          path: '/components-use-data-table'
        },
        {
          name: '面包屑'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
