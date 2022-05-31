<!-- 
* @Description 伸缩按钮
* @Date 2022-05-31
-->
<template>
  <div class="hamburger" @click="change">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'Hamburger',
  computed: {
    ...mapGetters(['collapse']),
    icon() {
      return this.collapse ? 'menu-open' : 'menu-close'
    }
  },
  methods: {
    ...mapMutations('app', ['setSidebarStatus']),
    change() {
      this.setSidebarStatus(!this.collapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  cursor: pointer;
}
</style>
