<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:43:37
 * @LastEditTime: 2020-07-16 16:38:10
 * @Description : TotalOrders-累计订单量
-->
<template>
  <common-card title="累计订单量" value="2,379,219">
    <template>
      <v-chart :options="getOptions()" />
    </template>

    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TotalOrders',

  mixins: [commonCardMixin],

  methods: {
    getOptions() {
      return {
        // 底板
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        // x轴
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false // x轴左右两边全部占满
        },
        // y轴
        yAxis: {
          show: false
        },
        // 提示框
        tooltip: {},
        // 系列
        series: [
          {
            type: 'line', // 折线图
            smooth: true, // 平滑过渡
            // 绘制面积
            areaStyle: {
              color: 'purple'
            },
            // 线宽为0
            lineStyle: {
              width: 0
            },
            // 点为透明
            itemStyle: {
              opacity: 0
            },
            data: [
              620,
              432,
              220,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              690,
              530,
              220,
              620
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
