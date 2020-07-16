<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:43:37
 * @LastEditTime: 2020-07-16 16:32:31
 * @Description : TotalUsers-累计用户数
-->
<template>
  <common-card title="累计用户数" value="1,068,490">
    <template>
      <v-chart :options="getOptions()" />
    </template>

    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">6.82%</span>
        <div class="increase" />
        <span class="month">月同比</span>
        <span class="emphasis">33.52%</span>
        <div class="decrease" />
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TotalUsers',

  mixins: [commonCardMixin],

  methods: {
    getOptions() {
      return {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        tooltip: {},
        series: [
          {
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#45c946'
            },
            data: [160]
          },
          {
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#eeeeee'
            },
            data: [250]
          },
          {
            type: 'custom', // 自定义绘图
            stack: '总量',
            renderItem: function(params, api) {
              const value = api.value(0) // 获取坐标点值，此处为160
              const endPoint = api.coord([value, 0]) // 真实的x、y坐标
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    // 形状
                    shape: {
                      d:
                        'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // 复制SVG的d值
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946' // 填充色
                    }
                  },
                  {
                    type: 'path',
                    // 形状
                    shape: {
                      d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z', // 复制SVG的d值
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946' // 填充色
                    }
                  }
                ]
              }
            },
            data: [160]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
