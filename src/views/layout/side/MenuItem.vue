<!-- 
* @Description 菜单项内容
* @Date 2022-05-31
-->
<template>
  <div class="menu-item" :class="[`menu-item-${level}`]">
    <template v-if="level === 1">
      <img
        class="menu-item-icon menu-item-icon-not-active"
        :src="require(`@/assets/images/menu-icons/${icon}.png`)"
      />
      <img
        class="menu-item-icon menu-item-icon-active"
        :src="require(`@/assets/images/menu-icons/${icon}-active.png`)"
      />
      <span class="menu-item-title">{{ title }}</span>
    </template>
    <template v-else-if="level === 2">
      <i class="menu-item-dot"></i>
      <span class="menu-item-title">{{ title }}</span>
    </template>
    <template v-else>
      <el-menu-item :index="index">
        <span class="menu-item-title">{{ title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuItemInner',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 1
    },
    index: {
      type: String,
      default: ''
    }
  }
}
</script>
