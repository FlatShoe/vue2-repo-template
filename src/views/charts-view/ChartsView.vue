<!-- 
* @Description 
* @Date
-->
<template>
  <div class="charts-view page">
    <!-- <el-row :gutter="20">
      <el-col :span="24">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="cheart-view-item">
          <chart height="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cheart-view-item">
          <chart height="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cheart-view-item">
          <chart height="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="cheart-view-item">
          <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
        </div>
      </el-col>
    </el-row> -->
    <!-- <upload-file
      :multiple="true"
      avatar="http://61.157.13.136:30332/assets/custom-active.94f37fde.png"
      @on-success="handleSuccess"
    />
    <upload-image /> -->
    <div class="tree-container">
      <flexo-tree
        showCheckbox
        checkStrictly
        :treeData="treeData"
        :defaultProps="{children: 'children', label: 'label'}"
        @check="check"
        @node-click="nodeClick"
        :render="renderFun"
      />
    </div>
  </div>
</template>

<script>
import UploadFile from '@/components/upload/UploadFile.vue'
import UploadImage from '@/components/upload/UploadImage.vue'
import FlexoTree from '@/components/trees/FlexoTree.vue'
const formSchema = [{label: '姓名', name: 'age', slot: 'age'}]
export default {
  name: 'ChartsView',
  components: {
    UploadFile,
    UploadImage,
    FlexoTree
  },
  data() {
    return {
      formSchema,
      barLoading: false,
      barOption: {},
      pieLoading: false,
      pieOption: {},
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 49,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        },
        {
          id: 4,
          label: '一级 3',
          children: [
            {
              id: 17,
              label: '二级 3-1'
            },
            {
              id: 28,
              label: '二级 3-2'
            }
          ]
        },
        {
          id: 40,
          label: '一级 3',
          children: [
            {
              id: 47,
              label: '二级 3-1'
            },
            {
              id: 48,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    renderFun(h, {node, data}) {
      const {label} = data
      return (
        <div
          class="custom-tree-node"
          on-click={this.nodeClick.bind(this, {node, data, type: 'click'})}
        >
          <span>{label}abc</span>
        </div>
      )
    },
    getBarData() {
      this.barLoading = true
      setTimeout(() => {
        this.barOption = {
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [20, 30, 10, 40, 20, 70]
            }
          ]
        }
        this.barLoading = false
      }, 2000)
    },
    getPieOption() {
      this.pieLoading = true
      setTimeout(() => {
        this.pieOption = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 1048, name: 'Search Engine'},
                {value: 735, name: 'Direct'},
                {value: 580, name: 'Email'},
                {value: 484, name: 'Union Ads'},
                {value: 300, name: 'Video Ads'}
              ]
            }
          ]
        }
        this.pieLoading = false
      }, 1000)
    },
    handleSuccess(url) {
      console.log(url)
    },
    check(node) {
      console.log(node)
    },
    nodeClick(nodeData) {
      console.log(nodeData, 'chart')
    }
  },
  mounted() {
    this.getBarData()
    this.getPieOption()
  }
}
</script>

<style lang="scss" scoped>
.charts-view {
  overflow: hidden;
  .tree-container {
    width: 500px;
    flex: 1;
    overflow-y: auto;
  }
  .cheart-view-item {
    width: 100%;
    height: 500px;
    background-color: #fff;
    margin-bottom: 20px;
  }
}
</style>
