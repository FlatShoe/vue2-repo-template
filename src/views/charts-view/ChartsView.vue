<!-- 
* @Description 
* @Date
-->
<template>
  <div class="charts-view">
    <div class="charts-view-container">
      <div class="cheart-view-item">
        <chart height="100%" width="100%" :loading="pieLoading" :option="pieOption" />
      </div>
      <div class="cheart-view-item" style="background-color: #fff">
        <chart height="100%" width="100%" :loading="barLoading" :option="barOption"></chart>
      </div>
    </div>
    <div class="cheart-view-item" style="height: 500px">
      <chart height="100%" :loading="pieLoading" :option="pieOption" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartsView',
  data() {
    return {
      barLoading: false,
      barOption: {},
      pieLoading: false,
      pieOption: {}
    }
  },
  methods: {
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
  overflow-y: auto;
  .charts-view-container {
    display: flex;
    overflow: hidden;
    .cheart-view-item {
      width: 50%;
      height: 500px;
      background-color: pink;
    }
  }
}
</style>
