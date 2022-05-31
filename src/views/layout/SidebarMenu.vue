<!-- 
* @Description 侧边菜单
* @Date 2022-05-31
-->
<template>
  <el-menu uniqueOpened :collapse="collapse" :default-active="defaultActive">
    <sidebar-menu-item v-for="route in menus" :key="route.path" :route="route" />
  </el-menu>
</template>

<script>
import routeMenus from '@/modules/menus'
import SidebarMenuItem from './SidebarMenuItem.vue'
export default {
  name: 'SidebarMenu',
  components: {
    SidebarMenuItem
  },
  computed: {
    menus() {
      return routeMenus.filterRoutes(this.$router.options.routes)
    }
  },
  data() {
    return {
      collapse: false,
      defaultActive: ''
    }
  }
}
</script>
