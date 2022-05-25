<!-- 
* @Description 简洁表单
* @Date 2022-05-23
-->
<template>
  <el-form
    class="concision-form"
    ref="formRef"
    :label-suffix="labelSuffix"
    :label-width="labelWidth"
    :size="size"
    :model="formData"
    :rules="formRules"
    :label-position="labelPosition"
  >
    <template v-for="(item, index) in formSchema">
      <el-row :key="index" v-if="item.fieldset && item.inputs.length && !item.slot">
        <el-col
          v-for="(input, inputIndex) in item.inputs"
          :key="input.name"
          :span="inputIndex === item.inputs.length - 1 && inputIndex % 2 === 0 ? 24 : 12"
        >
          <el-form-item v-if="input.slot" :label="input.label" :key="input.name" :prop="input.name">
            <slot :name="input.name" :row="{key: input.name}"></slot>
          </el-form-item>
          <component
            v-else
            :is="`${input.inputType}-input`"
            :value="formData[input.name]"
            v-bind="input"
            ref="input.name"
            @input="handleInput(input.name, $event)"
          >
          </component>
        </el-col>
      </el-row>
      <el-form-item v-else-if="item.slot" :label="item.label" :key="item.name" :prop="item.name">
        <slot :name="item.name" :row="{key: item.name}"></slot>
      </el-form-item>
      <components
        v-else
        :key="item.name"
        :is="`${item.inputType}-input`"
        :value="formData[item.name]"
        v-bind="item"
        @input="handleInput(item.name, $event)"
      ></components>
    </template>
  </el-form>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'ConcisionForm',
  props: {
    formSchema: {
      type: Array,
      default() {
        return []
      }
    },
    formRules: {
      type: Object,
      default() {
        return {}
      }
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelSuffix: {
      type: String,
      default: '：'
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  watch: {
    formSchema: {
      handler(newVal) {
        this.syncFormData()
      },
      immediate: true
    }
  },
  methods: {
    handleInput(name, value) {
      this.formData[name] = value
    },
    validateField() {
      this.$refs.form.validateField(name)
    },
    async submitForm() {
      try {
        const valid = await this.$refs.formRef.validate()
        if (valid) {
          this.$emit('submit', this.formData)
        }
      } catch (err) {}
    },
    syncFormData(data) {
      _.flatMap(this.formSchema, item => {
        if (item.fieldset && item.inputs.length) {
          return item.inputs
        } else {
          return [item]
        }
      }).forEach(input => {
        this.$set(this.formData, input.name, input.value)
      })
    },
    changeFormData(data) {
      this.formData = data
    },
    resetForm() {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>
