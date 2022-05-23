<!-- 
* @Description 级联选择器
* @Date 2022-05-23
-->
<template>
  <el-form-item class="cascader-input" :label="label" :prop="name" :required="required">
    <el-cascader
      clearable
      :options="collection"
      :props="props"
      :placeholder="placeholder"
      :disabled="disabled || readonly"
      v-model="selectedItems"
      @expand-change="handleItemChange"
      @change="handleChange"
    ></el-cascader>
  </el-form-item>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
export default {
  name: 'CascaderInput',
  mixins: [inputMixin],
  props: {
    collection: {
      type: Array,
      default() {
        return []
      }
    },
    propsOptions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      props: {
        expandTrigger: 'click',
        multiple: false,
        checkStrictly: false,
        value: 'value',
        label: 'name',
        children: 'children',
        disabled: 'disabled'
      },
      selectedItems: []
    }
  },
  methods: {
    handleItemChange() {
      this.$emit('input', this.selectedItems)
    },
    handleChange() {
      this.$emit('input', this.selectedItems)
    }
  },
  watch: {
    propsOptions: {
      handler(value) {
        this.props = {
          ...this.props,
          ...value
        }
      },
      immediate: true
    }
  }
}
</script>
