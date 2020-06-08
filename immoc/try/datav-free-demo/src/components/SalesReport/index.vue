<template>
  <div class="sales-report">
    <!-- header -->
    <div class="header">电商商品销售趋势图</div>
    <!-- content -->
    <div class="content">
      <div class="content-title-wrapper">月销售增长率</div>
      <div class="content-index-wrapper">
        <span class="up">⬆</span>
        <span class="percentag">34<span>%</span></span>
        <span class="text">+14,400</span>
      </div>
      <div id="content-chart" />
      <div class="content-circle-wrapper">
        <div
          :class="['circle', selectedIndex === index ? 'selected' : '']"
          v-for="(item, index) in circle"
          :key="index"
          @click="change(index)"
        />
      </div>
      <div class="content-bottom-wrapper">销售趋势</div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="footer-wrapper">
        <div class="left">
          <div class="footer-title">订单销售额</div>
          <div class="footer-sub-title">3月累计销售额</div>
        </div>
        <div class="right"><small>￥</small> 300,254.00</div>
      </div>
      <div class="progress-wrapper">
        <div class="progress-bg">
          <div
            class="progress-current"
            :style="{ width: `${progress * 100}%` }"
          ></div>
        </div>
      </div>
      <div class="footer-text">
        <div>销售增长率</div>
        <div>34%</div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from 'echarts'

export default {
  data() {
    return {
      circle: new Array(3),
      selectedIndex: 0,
      progress: 0.34
    }
  },

  mounted() {
    this.genChart()
    /* 定时自动轮播 */
    this.task = setInterval(() => {
      let index = this.selectedIndex
      index++
      if (index >= this.circle.length) {
        index = 0
      }
      this.change(index)
    }, 3000)
  },
  destroyed() {
    // 组件销毁前，先把定时器销毁
    if (this.task) {
      clearInterval(this.task)
    }
  },

  methods: {
    /**
     * @description: 点击小圆圈，轮播
     * @param {Number} index
     */
    change(index) {
      this.selectedIndex = index
      this.genChart()
    },

    /**
     * @description: echarts渲染逻辑
     */
    genChart() {
      // 获取数据源
      const mockData = []
      for (let i = 0; i < 10; i++) {
        mockData.push(Math.floor(Math.random() * 100) + 200)
      }
      // 获取chart对应的dom节点
      const chartDOM = document.getElementById('content-chart')
      // 初始化echarts对象
      const chart = Echarts.init(chartDOM)
      // 生成渲染参数
      const options = {
        xAxis: {
          type: 'category',
          show: false // 隐藏x轴
        },
        yAxis: {
          min: 0,
          max: 350,
          show: false // 隐藏y轴
        },
        series: [
          {
            type: 'line',
            data: mockData,
            smooth: true, // 曲线平滑过渡
            // 面积样式
            areaStyle: {
              color: 'rgba(75, 193, 252, 0.5)'
            },
            // 曲线样式
            lineStyle: {
              width: 4,
              color: 'rgba(75, 193, 252, 1)'
            },
            // 点的样式
            itemStyle: {
              borderWidth: 8,
              color: 'rgba(75, 193, 252, 1)'
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: -30,
          right: -30
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        }
      }
      // 渲染图表
      chart.setOption(options)
    }
  }
}
</script>

<style lang="scss">
.sales-report {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(4, 9, 20, 0.1), 0 2px 8px rgba(4, 9, 20, 0.1),
    0 2px 8px rgba(4, 9, 20, 0.1), 0 2px 8px rgba(4, 9, 20, 0.1);
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
    color: rgba(13, 27, 62, 0.7);
    padding-left: 20px;
  }
  .content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 28px;
    .content-title-wrapper {
      padding-top: 28px;
      color: rgb(108, 117, 125);
      font-size: 13px;
    }
    .content-index-wrapper {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .up {
        margin-left: 4px;
        font-size: 40px;
        color: green;
      }
      .percentag {
        font-size: 35px;
        font-weight: 700;
        color: #333333;
        margin-left: 10px;
        span {
          font-size: 28px;
          font-weight: 400;
          color: #999999;
          margin-left: 2px;
        }
      }
      .text {
        margin-left: 15px;
        color: rgb(58, 196, 125);
      }
    }
    #content-chart {
      flex: 1;
      width: 100%;
    }
    .content-circle-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      .circle {
        width: 10px;
        height: 10px;
        background: #ffffff;
        border: 3px solid rgb(63, 106, 216);
        border-radius: 50%;
        margin: 0 5px;
        &.selected {
          width: 12px;
          height: 12px;
          border: 5px solid rgb(63, 106, 216);
        }
      }
    }
    .content-bottom-wrapper {
      margin: 10px 0;
      font-size: 13px;
      color: #999999;
    }
  }
  .footer {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eeeeee;
    box-sizing: border-box;
    .footer-wrapper {
      display: flex;
      padding: 14px 14px 0;
      .left {
        .footer-title {
          font-size: 13px;
          font-weight: 700;
          color: #333333;
        }
        .footer-sub-title {
          font-size: 13px;
          color: #999999;
        }
      }
      .right {
        flex: 1;
        text-align: right;
        color: rgb(58, 196, 125);
        font-size: 25px;
        font-weight: 700;
        small {
          font-weight: 400;
        }
      }
    }
    .progress-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px;
      .progress-bg {
        position: relative;
        width: 100%;
        height: 7px;
        background: rgb(233, 236, 239);
        border-radius: 3.5px;
        .progress-current {
          position: absolute;
          top: 0;
          left: 0;
          height: 7px;
          background: #3f6ad8;
          border-radius: 3.5px;
          /* 蒙版 */
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background: #ffffff;
            opacity: 0;
            animation: progress-active 2s ease infinite; /* 给蒙版加上动画 */
          }
          @keyframes progress-active {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 0.3;
            }
          }
        }
      }
    }
    .footer-text {
      display: flex;
      justify-content: space-between;
      padding: 0 14px 14px;
      font-size: 13px;
      color: #999999;
    }
  }
}
</style>
