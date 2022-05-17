<!-- 
* @Description 视图卡
* @Date 2022-05-16
-->
<template>
  <div
    class="page-card-wrapper"
    :class="{
      'always-shadow': shadow,
      'always-border': border
    }"
  >
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
    },
    shadow: {
      type: Boolean,
      default: true
    },
    border: {
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
  .page-card-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
    .page-card-inner {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    &.always-shadow {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    &.always-border {
      border: 1px solid #ebeef5;
    }
  }
</style>
