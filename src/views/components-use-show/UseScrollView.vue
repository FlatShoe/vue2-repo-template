<template>
  <div class="use-scroll-view page">
    <scroll-view>
      <p v-for="item in 1000">{{item}}</p>
    </scroll-view>
  </div>
</template>

<script>
import ScrollView from '@/components/ScrollView'
export default {
 name: 'UseScrollView',
 components: {
   ScrollView
 }
}
</script>

<style lang="scss" scoped>

</style>

