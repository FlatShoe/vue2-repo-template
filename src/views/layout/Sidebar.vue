<!-- 
* @Description 侧边栏
* @Date 2022-05-27
-->
<template>
  <div class="sidebar">
    <div class="logo-container"></div>
    <div class="menu-main">
      <scroll-view style="height: 100%">
        <sidebar-menu class="sidebar-menu" />
      </scroll-view>
    </div>
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
  },
  data() {
    return {
      flag: false
    }
  }
}
</script>
