<!--
* @Description 简洁表单详情
* @Date
-->
<template>
  <div class="concision-detail">
    <ul class="concision-detail-ul" :style="fontSize ? `font-size: ${fontSize};` : ''">
      <li style="height: 10px" v-if="contentPadding"></li>
      <template v-if="schema && schema.info">
        <li :class="liClass(items)" v-for="(items, indexs) in schema.info" :key="indexs">
          <template v-if="items.title">
            <div :style="'width: auto;' + (items.titleStyle ? items.titleStyle : '')">
              {{ items.title }}
            </div>
          </template>
          <template v-else-if="items.info && items.info.length">
            <div
              class="concision-detail-info-item"
              :key="index"
              v-for="(item, index) in items.info"
              :style="
                item.width ? {width: item.width} : items.info.length === 1 ? {width: '100%'} : {}
              "
            >
              <!--  -->
              <div
                class="li-item-key"
                :class="schema.labelPosition ? `justify-content-${schema.labelPosition}` : ''"
                :style="
                  item.labelWidth
                    ? {width: item.labelWidth}
                    : schema.labelWidth
                    ? {width: schema.labelWidth}
                    : {}
                "
              >
                <slot :name="item.labelSlot"></slot>
                {{ item.labelSlot ? '' : item.labelName ? data[item.labelName] : item.label }}
              </div>
              <!--  -->
              <template v-if="item.slot">
                <div
                  class="li-item-value"
                  :class="{'content-bg-show': contentBgShow}"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`}
                      : {}
                  "
                >
                  <slot :name="item.slot"></slot>
                </div>
              </template>
              <template v-else-if="item.info">
                <div
                  class="li-item-value"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`, padding: 0}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`, padding: 0}
                      : {padding: 0}
                  "
                >
                  <div style="width: 100px" :class="{'content-bg-show': contentBgShow}">
                    {{ data[item.name] }}
                  </div>
                  <div style="width: 100px">
                    {{ item.info.labelName ? data[item.info.labelName] : item.info.label }}
                  </div>
                  <div
                    style="width: calc(100% - 200px)"
                    :class="{'content-bg-show': contentBgShow}"
                  >
                    {{
                      item.info.type === 'date'
                        ? dayDesc(data[item.info.name])
                        : item.info.type === 'dateTime'
                        ? dayTimeDesc(data[item.info.name])
                        : data[item.info.name]
                    }}
                  </div>
                </div>
              </template>
              <!--  -->
              <template v-else-if="item.imgShow && !item.singleImg">
                <div
                  class="li-item-value"
                  :class="{'content-bg-show': contentBgShow}"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`, padding: 0}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`, padding: 0}
                      : {padding: 0}
                  "
                >
                  <div class="item-img" v-for="(i, idx) in imgDesc(data[item.name])" :key="idx">
                    <el-image
                      v-if="data[item.name]"
                      style="width: 120px; height: auto"
                      :src="i"
                      :preview-src-list="[i]"
                    >
                    </el-image>
                  </div>
                </div>
              </template>
              <!--  -->
              <template v-else-if="item.imgShow && item.singleImg">
                <div
                  class="li-item-value"
                  :class="{'content-bg-show': contentBgShow}"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`}
                      : {}
                  "
                >
                  <div class="item-img" style="justify-content: flex-start">
                    <el-image
                      v-if="data[item.name]"
                      style="width: 120px; height: auto"
                      :src="data[item.name]"
                      :preview-src-list="[data[item.name]]"
                    >
                    </el-image>
                  </div>
                </div>
              </template>
              <!--  -->
              <template v-else-if="item.name">
                <div
                  class="li-item-value"
                  :class="{'text-indent': item.textIndent, 'content-bg-show': contentBgShow}"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`}
                      : {}
                  "
                >
                  {{
                    item.type === 'date'
                      ? dayDesc(data[item.name])
                      : item.type === 'dateTime'
                      ? dayTimeDesc(data[item.name])
                      : data[item.name]
                  }}
                </div>
              </template>
              <template v-else-if="item.value">
                <div
                  class="li-item-value"
                  :class="{
                    'text-indent': item.textIndent,
                    'content-bg-show': contentBgShow
                  }"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`}
                      : {}
                  "
                >
                  {{ item.value }}
                </div>
              </template>
              <!--  -->
              <template v-else>
                <div
                  class="li-item-value"
                  :class="{'content-bg-show': contentBgShow}"
                  :style="
                    item.labelWidth
                      ? {width: `calc(100% - ${item.labelWidth})`}
                      : schema.labelWidth
                      ? {width: `calc(100% - ${schema.labelWidth})`}
                      : {}
                  "
                >
                  {{
                    schema.placeholder
                      ? schema.placeholder
                      : item.placeholder
                      ? item.placeholder
                      : '-'
                  }}
                </div>
              </template>
            </div>
          </template>
          <slot v-else :name="items.name"></slot>
        </li>
      </template>
      <li style="height: 10px" v-if="contentPadding"></li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'ConcisionDetail',
  props: {
    schema: {
      type: Object,
      default() {
        return {}
      }
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    contentPadding: {
      type: Boolean,
      default: false
    },
    contentBgShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    liClass() {
      return item => {
        let className = ''
        if (item.info) {
          if (item.info.length === 3) className = 'li-three-content'
          if (item.info.length === 4) className = 'li-four-content'
        }
        if (this.contentBgShow) className += ' padding-4-0'
        return className
      }
    }
  },
  methods: {
    imgDesc(imgs) {
      if (imgs) {
        return imgs.split('|').slice(0, 2)
      } else {
        return []
      }
    },
    dayDesc(t) {
      if (t === '/') return t

      return t ? dayjs(t).format('YYYY-MM-DD') : '/'
    },
    dayTimeDesc(t) {
      if (t === '/') return t

      return t ? dayjs(t).format('YYYY-MM-DD HH:mm') : '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.concision-detail {
  width: 100%;
  overflow: hidden;
  .concision-detail-ul {
    li {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      background-color: #fff;
      &.padding-4-0 {
        padding: 4px 10px 4px 0;
      }
      & > div {
        width: 50%;
        display: flex;
        align-items: center;
        .li-item-key {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: right;
          width: 34%;
          height: 100%;
          color: #888;
          box-sizing: border-box;
          padding: 5px;
          &.justify-content-right {
            justify-content: flex-end;
          }
          &.justify-content-left {
            justify-content: flex-start;
          }
        }
        .li-item-value {
          width: 66%;
          height: 100%;
          box-sizing: border-box;
          padding: 5px 10px;
          color: #444;
          display: flex;
          align-items: center;
          overflow: hidden;
          &.text-indent {
            text-indent: 2em;
          }
          > img {
            width: 120px;
            height: auto;
          }
          .item-img {
            width: 50%;
            text-align: center;
            box-sizing: border-box;
            padding: 10px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 260px;
              max-height: 180px;
            }
          }
          &.content-bg-show {
            background-color: #fcfbfb;
          }
        }
      }
    }
    .li-three-content {
      > div {
        width: calc(100% / 3);
        box-sizing: border-box;
      }
    }
    .li-four-content {
      > div {
        width: 25%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
