import Echarts from 'echarts'

const chartDom = document.getElementById('chart')
const chart = Echarts.init(chartDom)
chart.setOption({
  title: {
    text: 'echarts-webpack案例'
  },
  xAxis: {
    data: ['食品', '服饰', '数码', '箱包']
  },
  yAxis: {},
  series: {
    type: 'bar',
    data: [100, 200, 150, 70]
  }
})
