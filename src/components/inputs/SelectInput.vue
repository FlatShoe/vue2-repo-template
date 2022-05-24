<!-- 
* @Description 下拉选择框
* @Date 2022-05-23
-->
<template>
  <el-form-item class="select-input" :label="label" :prop="name" :required="required">
    <el-select clearable v-model="selected" @change="$emit('input', $event)">
      <el-option
        v-for="item in collection"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: 'SelectInput',
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
