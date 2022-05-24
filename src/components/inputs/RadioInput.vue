<!-- 
* @Description 单选框
* @Date 2022-05-23
-->
<template>
  <el-form-item class="radio-input" :label="label" :prop="name" :required="required">
    <el-radio-group v-model="selected" @change="$emit('input', $event)">
      <template v-for="item in collection">
        <el-radio
          v-if="!radioButton"
          :border="border"
          :label="item.value"
          :key="item.value"
          :disabled="disabled"
        >
          {{ item.label }}
        </el-radio>
        <el-radio-button v-else :label="item.value" :key="item.value" :disabled="disabled">
          {{ item.label }}
        </el-radio-button>
      </template>
    </el-radio-group>
  </el-form-item>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: 'RadioInput',
  mixins: [inputMixin],
  props: {
    collection: {
      type: Array,
      default() {
        return []
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    radioButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  watch: {
    value(value) {
      this.selected = value
    }
  }
}
</script>
