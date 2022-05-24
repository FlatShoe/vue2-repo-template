<!-- 
* @Description 下拉选择框
* @Date 2022-05-23
-->
<template>
  <el-form-item class="select-input" :label="label" :prop="name" :required="required">
    <el-select
      clearable
      :filterable="filterable"
      :multiple="multiple"
      v-model="selected"
      @change="$emit('input', $event)"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import inputMixin from '@/mixins/input-mixin'
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'SelectInput',
  mixins: [inputMixin],
  props: {
    collection: {
      type: Array,
      default() {
        return []
      }
    },
    collectionName: {
      type: String,
      default: ''
    },
    filterable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: [],
      selected: null
    }
  },
  watch: {
    value: {
      handler(value) {
        if (!value) return (this.selected = null)
        this.selected = cloneDeep(value)
      },
      immediate: true
    },
    collection: {
      handler(value) {
        if (this.collectionName) return
        this.options = value
      },
      immediate: true
    },
    collectionName: {
      handler(value) {
        if (!value) return
        const [model, key] = value.split('/')
        try {
          if (key) {
            this.options = this.$store.state[model][key]
          } else {
            this.options = this.$store.state[model]
          }
        } catch (err) {
          this.options = []
        }
      }
    }
  }
}
</script>
