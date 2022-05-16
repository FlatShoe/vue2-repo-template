<template>
  <div class="UseFormDialog">
    <el-button @click="visible = true">打开</el-button>

    <form-dialog
      :visible="visible"
      ref="formDialogRef"
      title="新增"
      @confirm="confirm"
      @closed="visible = false"
    >

    </form-dialog>
  </div>
</template>

<script>
import FormDialog from '@/components/FormDialog'
export default {
  name: 'UseFormDialog',
  components: {
    FormDialog
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    confirm(payload) {
      console.log(payload)
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
