<!-- 
* @Description 主体区域
* @Date 2022-05-27
-->
<template>
  <div class="page">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
