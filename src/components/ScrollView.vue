<!-- 
* @Description 滚动视图
* @Date 2022-05-16
-->
<template>
  <div class="scroll-view" v-bar>
    <div class="scroll-container">
      <div class="scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollView'
}
</script>
