<!-- 
* @Description 上传图片
* @Date
-->
<template>
  <div class="upload-image-container">
    <el-upload
      class="upload-image"
      ref="uploadImageRef"
      :style="{
        width: width,
        height: height
      }"
      :show-file-list="false"
      :action="action"
      :headers="headers"
      :accept="accept"
      :on-success="handleSuccess"
      :before-upload="handleBeforeUpload"
    >
      <img v-if="imageUrl" class="avatar" :src="imageUrl" />
      <i v-else class="el-icon-plus avatar-uploader-icon" v-loading="loading"></i>
      <div slot="tip" class="el-upload__tip" v-if="uploadTip">{{ uploadTip }}</div>
    </el-upload>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getUploadURL} from '@/modules/utils'
import {getFIleSuffix} from '@/utils/general'
export default {
  name: 'UploadImage',
  props: {
    width: {
      type: String,
      default: '178px'
    },
    height: {
      type: String,
      default: '178px'
    },
    // 提示
    uploadTip: {
      type: String,
      defualt: ''
    },
    // 接受的类型
    accept: {
      type: String,
      defualt: ''
    },
    // 需要展示fileList的字符串
    avatar: {
      type: String,
      defualt: ''
    },
    // 只允许上传的类型
    fileType: {
      type: Array,
      default() {
        return ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif']
      }
    },
    // 文件大小限制
    fileSize: {
      type: Number,
      default: null
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
      imageUrl: ''
    }
  },
  methods: {
    handleSuccess(res) {
      this.loading = false
      this.imageUrl = res.data.url
      this.$emit('on-success', res.data.url)
    },
    handleBeforeUpload(file) {
      if (this.fileType.length) {
        if (!this.fileType.includes(getFIleSuffix(file.name))) {
          this.$message.error('允许上传文件类型为' + this.fileType.join('、'))
          return false
        }
      }
      if (this.fileSize) {
        if (file.size / 1024 > this.fileSize) {
          this.$message.error('允许上传文件大小最大为' + this.fileSize + 'k')
          return false
        }
      }
      this.loading = true
    },
    clearFiles() {
      this.$refs.uploadImageRef.clearFiles()
      this.imageUrl = ''
    }
  },
  watch: {
    avatar: {
      handler(value) {
        this.imageUrl = value
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.upload-image-container {
  width: fit-content;
  height: fit-content;
  .upload-image .el-upload {
    width: 100%;
    height: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 28px;
    color: #8c939d;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
