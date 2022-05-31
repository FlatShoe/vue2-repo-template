<!--
* @Description 菜单项
* @Date 2022-05-31
-->
<template>
  <el-submenu v-if="route.children && route.children.length > 0" :index="route.path">
    <template slot="title">
      <!-- <router-link class="submenu-router-link" :to="route.path" tag="div">
        <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
      </router-link> -->
      <div class="submenu-wrapper">
        <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
      </div>
    </template>
    <sidebar-menu-item v-for="item in route.children" :key="item.path" :route="item" />
  </el-submenu>
  <el-menu-item v-else :index="route.path">
    <!-- <router-link class="menu-item-router-link" :to="route.path" tag="div">
      <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
    </router-link> -->
    <div class="menu-item-wrapper">
      <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
    </div>
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
