<!-- 
* @Description 文本框
* @Date
-->
<template>
  <div class="text-input">
    <el-form-item :label="label" :prop="name" :required="required">
      <el-input
        type="text"
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
  name: 'TextInput',
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
