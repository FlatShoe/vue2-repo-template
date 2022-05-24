<!-- 
* @Description 
* @Date
-->
<template>
  <div class="use-concision-form">
    <concision-form ref="concisionFormRef" :formSchema="formSchema" :formRules="formRules">
      <template slot="hiddenDangereType">
        <span>123</span>
      </template>
    </concision-form>
    <el-button @click="handlerSubmit">提交</el-button>
    <el-button @click="handelReset">清除</el-button>
  </div>
</template>

<script>
import ConcisionForm from '@/components/ConcisionForm.vue'
const cascaderCollection = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致'
          },
          {
            value: 'fankui',
            label: '反馈'
          },
          {
            value: 'xiaolv',
            label: '效率'
          },
          {
            value: 'kekong',
            label: '可控'
          }
        ]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航'
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航'
          }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'typography',
            label: 'Typography 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          },
          {
            value: 'button',
            label: 'Button 按钮'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'input-number',
            label: 'InputNumber 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          },
          {
            value: 'upload',
            label: 'Upload 上传'
          },
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table 表格'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'progress',
            label: 'Progress 进度条'
          },
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pagination',
            label: 'Pagination 分页'
          },
          {
            value: 'badge',
            label: 'Badge 标记'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          },
          {
            value: 'message',
            label: 'Message 消息提示'
          },
          {
            value: 'message-box',
            label: 'MessageBox 弹框'
          },
          {
            value: 'notification',
            label: 'Notification 通知'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单'
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          },
          {
            value: 'steps',
            label: 'Steps 步骤条'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog 对话框'
          },
          {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          },
          {
            value: 'popover',
            label: 'Popover 弹出框'
          },
          {
            value: 'card',
            label: 'Card 卡片'
          },
          {
            value: 'carousel',
            label: 'Carousel 走马灯'
          },
          {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }
        ]
      }
    ]
  },
  {
    value: 'ziyuan',
    label: '资源',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'jiaohu',
        label: '组件交互文档'
      }
    ]
  }
]
const radiosCollection = [
  {
    value: '1',
    label: '单选框1'
  },
  {
    value: '2',
    label: '单选框2'
  },
  {
    value: '3',
    label: '单选框3'
  }
]
const selectCollection = [
  {
    value: '1',
    label: '选择器1'
  },
  {
    value: '2',
    label: '选择器2'
  },
  {
    value: '3',
    label: '选择器3'
  }
]

const formRules = {
  keyParameterIndex: {required: true, message: '请输入参数索引'}
}

const formSchema = [
  {
    name: 'detail',
    label: '情况',
    inputType: 'cascader',
    collection: cascaderCollection,
    propsOptions: {label: 'label'},
    value: ['zhinan', 'shejiyuanze', 'yizhi']
  },
  {
    fieldset: true,
    inputs: [
      {name: 'keyParameterIndex', label: '指标', inputType: 'text'},
      {name: 'controlMeasures', label: '施', inputType: 'text'},
      {name: 'classification', label: '分类', inputType: 'text'},
      {name: 'memo', label: '备注', inputType: 'textarea'}
    ]
  },
  {
    fieldset: true,
    inputs: [
      {name: 'controlProfession', label: '专业', inputType: 'text'},
      {name: 'nationalStandard', label: '标记', inputType: 'text'},
      {
        name: 'controlMeans',
        label: '手段',
        inputType: 'select',
        collection: [
          {label: '拍照', value: '拍照'},
          {label: '热成像', value: '热成像'},
          {label: '振动', value: '振动'},
          {label: '摄像', value: '摄像'}
        ],
        value: '拍照'
      }
    ]
  }
]

export default {
  name: 'UseConcisionForm',
  components: {
    ConcisionForm
  },
  data() {
    return {
      form: {},
      formSchema,
      formRules,
      cascaderCollection,
      radiosCollection,
      selectCollection,
      labelPosition: 'right',
      formLabelAlign: {}
    }
  },
  methods: {
    handlerSubmit() {
      this.$refs.concisionFormRef.submitForm()
    },
    handelReset() {
      this.$refs.concisionFormRef.resetForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.use-concision-form {
  height: 100%;
  overflow-y: auto;
}
</style>
