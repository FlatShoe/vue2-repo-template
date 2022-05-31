<!-- 
* @Description 菜单项内容
* @Date 2022-05-31
-->
<template>
  <div class="menu-item">
    <img
      class="menu-item-icon"
      src="https://img2.baidu.com/it/u=420156118,3874648934&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
    />

    <span class="menu-item-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuItemInner',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
