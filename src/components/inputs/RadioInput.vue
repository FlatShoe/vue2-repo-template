<!-- 
* @Description 单选框
* @Date 2022-05-23
-->
<template>
  <el-form-item class="radio-input" :label="label" :prop="name" :required="required">
    <el-radio-group v-model="selected" @change="$emit('input', $event)">
      <el-radio v-for="item in collection" :label="item.value" :key="item.value">
        {{ item.label }}
      </el-radio>
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
