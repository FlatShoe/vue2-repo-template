<template>
  <div class="home">
    
    <button @click="test">按钮</button>
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