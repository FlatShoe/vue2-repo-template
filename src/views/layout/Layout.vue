<!-- 
* @Description 基础架构
* @Date 2022-05-27
-->
<template>
  <div class="layout-container">
    <sidebar class="layout-sidebar" />
    <div class="layout-wrapper">
      <div class="layout-header">
        <header-bar />
      </div>
      <main class="layout-main" />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import HeaderBar from './HeaderBar.vue'
import Main from './Main.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    HeaderBar,
    Main
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/variables.scss';
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-sidebar {
    flex: 0 0 $sideBarWidth;
    background-color: $themeBg;
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
    flex: 0 0 $headerHeight;
    background-color: $themeBg;
  }
  .layout-main {
    flex: 1;
    background-color: $mainBg;
  }
}
</style>
