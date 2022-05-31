<!-- 
* @Description 侧边栏
* @Date 2022-05-27
-->
<template>
  <div class="sidebar">
    <div class="logo-container"></div>
    <scroll-view>
      <sidebar-menu />
    </scroll-view>
  </div>
</template>

<script>
import ScrollView from '@/components/ScrollView.vue'
import SidebarMenu from './SidebarMenu.vue'
export default {
  name: 'Sidebar',
  components: {
    ScrollView,
    SidebarMenu
  }
}
</script>
