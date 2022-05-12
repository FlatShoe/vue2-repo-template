<template>
  <div class="home">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    test() {
      const a = [1, 2, 3]
      const b = [4, 5, 6]
      const c = [...a, ...b]
      console.log(c)
    }
  }
}
</script>