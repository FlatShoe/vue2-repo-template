<!-- 
* @Description 头部区域
* @Date 2022-05-27
-->
<template>
  <header class="header-container">
    <div class="user-control">
      <el-dropdown class="dropdown-wrapper" trigger="click" @command="handleCommand">
        <div class="dropdown-avatar">
          <el-avatar
            shape="square"
            :size="50"
            src="https://img2.baidu.com/it/u=420156118,3874648934&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
          ></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    /**
     * @Description 操作指令
     */
    handleCommand(command) {
      if (command === 'logout') {
        console.log('退出')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .user-control {
    height: fit-content;
  }
}
</style>
