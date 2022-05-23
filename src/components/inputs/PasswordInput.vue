<!-- 
* @Description 密码框
* @Date 2022-05-23
-->
<template>
  <div class="password-input">
    <el-form-item :label="label" :prop="name" :required="required">
      <el-input
        type="password"
        v-model="stingValue"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('input', $event)"
      >
      </el-input>
    </el-form-item>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: 'PasswordInput',
  mixins: [inputMixin],
  data() {
    return {
      stingValue: ''
    }
  },
  watch: {
    value(value) {
      this.stingValue = value
    }
  }
}
</script>
