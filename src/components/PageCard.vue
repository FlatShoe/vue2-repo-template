<!-- 
* @Description 视图卡
* @Date 2022-05-16
-->
<template>
  <div
    class="page-card-wrapper"
    :class="{
      'always-shadow': shadow,
      'always-border': border,
      'clear-margin': clearMargin,
      'margin-top': marginTop,
      'margin-bottom': marginBottom
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
    },
    marginTop: {
      type: Boolean,
      default: true
    },
    marginBottom: {
      type: Boolean,
      default: true
    },
    clearMargin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ScrollView
  },
}
</script>

<style lang="scss" scoped>
  .page-card-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #FBF9FC;
    box-sizing: border-box;
    margin: 0px 10px 10px 10px;
    &.margin-top {
      margin-top: 10px;
    }
    &.margin-bottom {
      margin-bottom: 10px;
    }
    &.clear-margin {
      margin: 0;
      width: 100%;
    }
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
