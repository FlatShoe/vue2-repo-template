<!-- 
* @Description 日期范围选择器
* @Date 2022-05-23
-->
<template>
  <div class="date-range-input">
    <el-form-item :label="label" :prop="name" :required="required">
      <el-date-picker
        type="daterange"
        :editable="false"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :disabled="disabled"
        :readonly="readonly"
        v-model="selected"
        @change="$emit('input', $event)"
      ></el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: 'DateRangeInput',
  mixins: [inputMixin],
  props: {
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    }
  },
  data() {
    return {
      selected: this.value
    }
  }
}
</script>
