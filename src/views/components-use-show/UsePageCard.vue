<!-- 
* @Description 
* @Date
-->
<template>
  <div class="use-page-card page">
    <page-card>
      <p v-for="item in 1000">{{item}}</p>
    </page-card>
  </div>
</template>

<script>
import PageCard from '@/components/PageCard'
export default {
  name: 'UsePageCard',
  components: {
    PageCard
  }
}
</script>

<style lang="scss" scoped>

</style>
