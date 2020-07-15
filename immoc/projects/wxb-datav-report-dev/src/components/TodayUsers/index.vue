<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:43:37
 * @LastEditTime: 2020-07-15 22:46:34
 * @Description : TodayUsers-今日交易用户数
-->
<template>
  <common-card title="今日交易用户数" value="202,018">
    <template>
      <div
        id="todat-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>

    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.23%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TodayUsers',

  mixins: [commonCardMixin],

  mounted() {
    const chartDom = document.getElementById('todat-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
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
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ]
      },
      // y轴
      yAxis: {
        show: false
      },
      // 提示框
      tooltip: {
        trigger: 'axis', // 触发类型为x轴
        axisPointer: {
          type: 'line'
        }
      },
      // 颜色
      color: ['#3398DB'],
      // 系列
      series: [
        {
          type: 'bar', // 折现
          name: '直接访问', // 系列名称，用于tooltip的显示和legend的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
          barWidth: '60%',
          data: [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290,
            330,
            150
          ]
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped></style>
