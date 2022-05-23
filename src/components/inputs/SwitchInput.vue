<!-- 
* @Description 开关
* @Date 2022-05-23
-->
<template>
  <div class="switch-input">
    <el-form-item :label="label" :prop="name" :required="required">
      <el-switch
        :name="name"
        v-model="checked"
        :disabled="disabled || readonly"
        :active-value="1"
        :inactive-value="0"
        @change="$emit('input', $event)"
      >
      </el-switch>
    </el-form-item>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: '',
  mixins: [inputMixin],
  data() {
    return {
      checked: this.value
    }
  },
  watch: {
    value(v) {
      this.checked = v
    }
  }
}
</script>
