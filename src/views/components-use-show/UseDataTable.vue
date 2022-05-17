<template>
  <div class="use-data-table page">
    <data-table
      showBottomBar
      :columns="columns"
      :data="list"
      :total="100"
      stripe
      highlightCurrentRow
      @page-size-change="pageSizeChange"
      @page-change="pageChange"
    >
      <template slot="toolbar">
        flatshoes
      </template>
      <template slot="content">你好</template>
    </data-table>
  </div>
</template>
<script>
import DataTable from '@/components/DataTable.vue'

const columns = [
  {label: '序号', name: '', type: 'index'},
  {label: '姓名', name: 'name'},
  {label: '省份', name: 'province'},
  {label: '城市', name: 'city'},
  {label: '地址', name: 'address'},
  {label: '邮政编码', name: 'zip'},
  {label: '插槽内容', name: '__slot:content'},
  {label: '时间', name: 'date', sortable: true},
]

export default {
  name: 'UseDataTable',
  components: {
    DataTable
  },
  data() {
    return {
      columns,
      list: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652626793522
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666753522
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666797522
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652626793522
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666753522
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666797522
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652626793522
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666753522
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666793522
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          date: 1652666797522
        }
      ]
    }
  },
  methods: {
    pageSizeChange(size) {
      console.log(size)
    },
    pageChange(current) {
      console.log(current)
    }
  }
}
</script>