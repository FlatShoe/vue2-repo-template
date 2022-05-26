<!-- 
* @Description 登陆页
* @Date 2022-05-26
-->
<template>
  <div class="login-container">
    <el-form class="login-form" ref="formRef" :rules="rules" :model="form">
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          name="username"
          type="text"
          v-model="form.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          name="password"
          type="password"
          v-model="form.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-button" type="primary" @click="handleLogin" :loading="loading"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const rules = {
  username: {required: true, trigger: 'blur', message: '请输入用户名'},
  password: {required: true, trigger: 'blur', message: '请输入密码'}
}
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules
    }
  },
  methods: {
    async handleLogin() {
      if (this.loading) return
      this.loading = true
      const valid = await this.$refs.formRef.validate().catch(err => (this.loading = false))
      if (!valid) return
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.login-container {
  .el-input {
    display: inline-block;
    input {
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
    }
  }
}
</style>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #d0e9f9 0%, #ffffff 100%);
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  .login-button {
    width: 100%;
    height: 100%;
    background-color: #a7c9e1;
    border: none;
  }
}
</style>
