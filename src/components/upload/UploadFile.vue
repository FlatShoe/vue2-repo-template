<!--
* @Description 上传
* @Date
-->
<template>
  <div class="upload-file">
    <el-upload
      class="upload-file"
      ref="uploadFileRef"
      :action="action"
      :accept="accept"
      :headers="headers"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :multiple="multiple"
      :disabled="disabled"
      show-file-list
      :file-list="fileList"
      :limit="limit"
    >
      <el-button type="primary" :disabled="disabled" size="small" :loading="loading"
        >点击上传</el-button
      >
      <div slot="tip" class="el-upload__tip" v-if="uploadTip">{{ uploadTip }}</div>
    </el-upload>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getUploadURL} from '@/modules/utils'
import {getResourceName, getFIleSuffix} from '@/utils/general'
export default {
  name: 'UploadFile',
  props: {
    // 提示
    uploadTip: {
      type: String,
      defualt: ''
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: true
    },
    // 接受的类型
    accept: {
      type: String,
      defualt: ''
    },
    // 按钮名字
    buttonName: {
      type: String,
      default: '点击上传'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 需要展示fileList的字符串
    avatar: {
      type: String,
      defualt: ''
    },
    // 字符串分割符
    avatarSplit: {
      type: String,
      default: ';'
    },
    // 文件个数限制
    limit: {
      type: Number,
      default: 8
    },
    // 只允许上传的类型
    fileType: {
      type: Array,
      default() {
        return [] // [.png, .jpg, ...]
      }
    },
    // 文件大小限制
    fileSize: {
      type: Number | null,
      default: 2
    }
  },
  computed: {
    ...mapGetters(['token']),
    action() {
      return getUploadURL()
    },
    headers() {
      return {
        Authorization: this.token
      }
    }
  },
  data() {
    return {
      loading: false,
      fileList: []
    }
  },
  methods: {
    handleSuccess(res, file, fileList) {
      this.loading = false
      this.fileList = []
      if (this.multiple) {
        this.fileList = fileList.map(file => ({
          name: file.name,
          url: file.response ? file.response.data.url : file.url
        }))
        this.$emit(
          'on-success',
          this.fileList.map(file => file.url)
        )
      } else {
        this.fileList = [{name: file.name, url: file.response ? file.response.data.url : file.url}]
        this.$emit('on-success', res.data.url)
      }
    },
    handleError(err) {
      this.loading = false
      this.$message({type: 'error', message: '上传失败'})
      this.$emit('on-error', err)
    },
    handleExceed() {
      this.$message.warning(`当前限制最多选择上传 ${this.limit} 个文件`)
    },
    beforeUpload(file) {
      console.log(this.fileSize)
      if (this.fileType.length) {
        if (this.fileType.include(getFIleSuffix(file.name))) {
          this.$message.error('允许上传文件类型为' + this.fileType.join('、'))
          return false
        }
      }
      if (this.fileSize) {
        console.log(file.size / 1024)
        if (file.size / 1024 > this.fileSize) {
          this.$message.error('允许上传文件大小最大为' + this.fileSize + 'k')
          return false
        }
      }
      this.loading = true
    },
    clearFiles() {
      this.$refs.uploadFileRef.clearFiles()
    }
  },
  watch: {
    avatar: {
      handler(value) {
        if (!this.multiple && value) {
          this.fileList = [{name: getResourceName(value), url: value}]
        } else {
          if (value) {
            const stringArr = value.split(this.avatarSplit)
            this.fileList = stringArr.map(url => ({name: getResourceName(value), url}))
          }
        }
      },
      immediate: true
    }
  }
}
</script>
