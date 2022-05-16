<template>
  <div class="use-left-right-page page" style="background-color: pink;">
    <left-right-page useSplitBlock>
      <template slot="left-page">左侧</template>
      <template slot="right-page">右侧</template>
    </left-right-page>
  </div>
</template>

<script>
import LeftRightPage from '@/components/LeftRightPage'
export default {
  name: 'UseLeftRightPage',
  components: {
    LeftRightPage
  }
}
</script>