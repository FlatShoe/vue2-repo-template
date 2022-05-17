<!-- 
* @Description 
* @Date
-->
<template>
  <div class="use-page-card page">
    <page-card :scrollable="false">
      <left-right-page useSplitBlock>
        <template slot="left-page">
          <div class="left-page-container page" v-bar>
            <div>
              <p v-for="item in 1000">{{item}}</p>
            </div>
          </div>
        </template>
        <template slot="right-page">
          213
        </template>
      </left-right-page>
    </page-card>
  </div>
</template>

<script>
import PageCard from '@/components/PageCard'
import LeftRightPage from '@/components/LeftRightPage'
export default {
  name: 'UsePageCard',
  components: {
    PageCard,
    LeftRightPage
  }
}
</script>

<style lang="scss" scoped>

</style>
