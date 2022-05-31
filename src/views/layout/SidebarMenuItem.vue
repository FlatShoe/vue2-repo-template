<!--
* @Description 菜单项
* @Date 2022-05-31
-->
<template>
  <el-submenu v-if="route.children && route.children.length > 0" :index="route.path">
    <template slot="title">
      <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
    </template>
    <sidebar-menu-item v-for="item in route.children" :key="item.path" :route="item" />
  </el-submenu>
  <el-menu-item v-else :index="route.path">
    <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
  </el-menu-item>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'SidebarMenuItem',
  components: {
    MenuItem
  },
  props: {
    route: {
      type: Object,
      required: true
    }
  }
}
</script>
