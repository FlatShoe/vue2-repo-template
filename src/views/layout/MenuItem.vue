<!-- 
* @Description 菜单项内容
* @Date 2022-05-31
-->
<template>
  <div class="menu-item">
    <img
      class="menu-item-icon menu-item-icon-not-active"
      :src="require(`@/assets/images/menu-icons/${icon}.png`)"
    />
    <img
      class="menu-item-icon menu-item-icon-active"
      :src="require(`@/assets/images/menu-icons/${icon}-active.png`)"
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
