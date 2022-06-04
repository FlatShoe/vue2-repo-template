<!-- 
* @Description 基础架构
* @Date 2022-05-27
-->
<template>
  <div class="layout-container">
    <sidebar class="layout-sidebar" :class="{hide: !collapse}" />
    <div class="layout-wrapper">
      <div class="layout-header">
        <header-bar />
      </div>
      <app-main class="layout-main" />
    </div>
  </div>
</template>

<script>
import Sidebar from './side/Sidebar.vue'
import HeaderBar from './header/HeaderBar.vue'
import AppMain from './main/AppMain.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    HeaderBar,
    AppMain
  },
  computed: {
    ...mapGetters(['collapse'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/variables.scss';
$sidebar-width: 240px;
$sidebar-hide-width: 80px;
$header-height: 70px;
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-sidebar {
    transition: flex $sidebarDurtion;
    flex: 0 0 $sidebar-width;
    &.hide {
      flex: 0 0 $sidebar-hide-width;
    }
  }
  .layout-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .layout-header,
  .layout-main {
    width: 100%;
    overflow: hidden;
  }
  .layout-header {
    flex: 0 0 $header-height;
    background-color: $themeBg;
  }
  .layout-main {
    flex: 1;
    background-color: $mainBg;
  }
}
</style>
