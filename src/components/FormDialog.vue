<!-- 
* @Description 弹窗
* @Date 2022-05-16
-->
<template>
  <div class="form-dialog">
    <el-dialog
      :width="width"
      :title="title"
      :center="center"
      :show-close="showClose"
      :visible.sync="show"
      :destroy-on-close="destroyOnClose"
      :append-to-body="appendToBody"
      :fullscreen="fullscreen"
      @open="$emit('open')"
      @close="$emit('close')"
      @closed="$emit('closed')"
    >
      <slot></slot>
      <template slot="footer" v-if="showButtons">
        <div class="form-buttons">
          <el-button
            :size="button.size || 'small'"
            v-for="button in buttons"
            :key="button.label"
            :type="button.type"
            @click="$emit(button.emit, button)"
          >
            {{button.label}}
          </el-button>
          <el-button
            :size="clearButton.size || 'small'"
            :type="clearButton.type"
            @click="show = false"
          >{{clearButton.label}}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FormDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '800px'
    },
    center: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    showButtons: {
      type: Boolean,
      default: true
    },
    buttons: {
      type: Array,
      default: () => [
        {
          label: '确定',
          type: 'primary',
          emit: 'confirm'
        }
      ]
    },
    clearButton: {
      type: Object,
      default() {
        return {
          label: '取消',
          type: 'danger'
        }
      }
    }
  },
  data() {
    return {
      show: null
    }
  },
  watch: {
    visible(value) {
      this.show = value
    },
    show(val, oldVal) {
      if (oldVal !== null && val !== oldVal) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-dialog {
    .form-buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
