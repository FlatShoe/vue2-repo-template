<!-- 
* @Description 基础架构
* @Date 2022-05-27
-->
<template>
  <div class="layout-container">
    <sidebar class="layout-sidebar" :class="{hidden: !collapse}" />
    <div class="layout-wrapper">
      <div class="layout-header">
        <header-bar />
      </div>
      <app-main class="layout-main" />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import HeaderBar from './HeaderBar.vue'
import AppMain from './AppMain.vue'
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
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-sidebar {
    flex: 0 0 230px;
    background-color: $themeBg;
    &.hidden {
      flex: 0 0 60px;
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
    flex: 0 0 70px;
    background-color: $themeBg;
  }
  .layout-main {
    flex: 1;
    background-color: $mainBg;
  }
}
</style>
