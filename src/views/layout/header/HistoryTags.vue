<!--
* @Description 历史路由标签列表
* @Date
-->
<template>
  <div class="history-tags">
    <el-tabs type="card" v-model="tagValue" @edit="handleEdit" closable @tab-click="handleClick">
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in historyTags"
        :name="item.title"
        :label="item.title"
      >
        <span slot="label">
          <router-link :to="{name: item.name}" class="there-router">
            <i class="route-line route-left-line" v-if="index !== 0"></i>
            {{ item.title }}
          </router-link>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import whiteList from '@/modules/whiteList'
export default {
  name: 'HistoryTags',
  data() {
    return {
      tagValue: ''
    }
  },
  computed: {
    ...mapGetters(['historyTags'])
  },
  methods: {
    ...mapMutations('app', ['setHistoryTags']),
    /**
     * @Description 生成路由标签
     * @param {Object} route 路由
     * @return Object
     */
    generateTag(route) {
      let title = ''
      const {fullPath, meta, name, params, path, query} = route
      if (!route.meta) {
        const pathArr = route.path.split('/')
        title = pathArr[pathArr.length - 1]
      } else {
        title = meta.title
      }
      return {
        name,
        path,
        fullPath,
        title,
        params,
        query
      }
    },
    handleEdit() {},
    handleClick() {}
  },
  watch: {
    $route: {
      handler(to) {
        if (whiteList.includes(to.path)) return
        this.setHistoryTags(this.generateTag(to))
      },
      immediate: true
    }
  }
}
</script>

<style scoped></style>
