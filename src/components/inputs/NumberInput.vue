<!-- 
* @Description 数字input
* @Date 2022-05-23
-->
<template>
  <div class="number-input">
    <el-form-item :label="label" :prop="name" :required="required">
      <el-input
        type="number"
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
  name: 'NumberInput',
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
