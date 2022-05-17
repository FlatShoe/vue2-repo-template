<!-- 
* @Description 视图卡
* @Date 2022-05-16
-->
<template>
  <div class="page-card">
    <div class="page-card-header">
      <slot name="header" />
    </div>
    <div class="page-card-inner">
      <scroll-view v-if="scrollable">
        <slot />
      </scroll-view>
      <slot v-else />
    </div>
    <div class="page-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import ScrollView from './ScrollView'
export default {
  name: 'PageCard',
  props: {
    scrollable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ScrollView
  },
}
</script>

<style lang="scss" scoped>
  .page-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .page-card-inner {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
</style>
