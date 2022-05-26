<template>
  <div class="home page">
    <el-button @click="login">按钮</el-button>
  </div>
</template>
<script>
import {login} from '@/api/system'
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    login() {
      login()
    }
  }
}
</script>
