<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:07:52
 * @LastEditTime: 2020-07-24 15:10:34
 * @Description : SalesView-区域二
-->
<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <!-- header区域 -->
      <template v-slot:header>
        <div class="menu-wrapper">
          <!-- 菜单栏 -->
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <!-- 剩余右侧 -->
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            />
          </div>
        </div>
      </template>

      <!-- body区域 -->
      <template>
        <div class="sales-view-chart-wrapper">
          <!-- 图形 -->
          <v-chart :options="chartOptions" />
          <!-- 列表 -->
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',

  data() {
    return {
      activeIndex: '1', // 默认选中菜单项
      // 单选框
      radioSelect: '今年',
      // 日期选择器
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      // 图形
      chartOptions: {
        title: {
          text: '年度销售业绩数据',
          textStyle: {
            fontSize: 12,
            color: '#666666'
          },
          left: 25,
          top: 20
        },
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#999999'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999999'
            }
          },
          axisLabel: {
            color: '#333333'
          },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eeeeee'
            }
          }
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        series: [
          {
            type: 'bar',
            name: 'sales',
            barWidth: '35%',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290]
          }
        ]
      },
      // 列表
      rankData: [
        { no: 1, name: '肯德基', money: '323,234' },
        { no: 2, name: '麦当劳', money: '299,132' },
        { no: 3, name: '海底捞', money: '283,223' },
        { no: 4, name: '西贝筱面村', money: '266,223' },
        { no: 5, name: '汉堡王', money: '266,223' },
        { no: 6, name: '必胜客', money: '219,663' },
        { no: 7, name: '真功夫', money: '200,993' }
      ]
    }
  },

  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
      if (this.activeIndex === '1') {
        this.chartOptions.title.text = '年度销售业绩数据'
        this.chartOptions.series[0].data = [
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
          290
        ]
        this.rankData = [
          { no: 1, name: '肯德基', money: '323,234' },
          { no: 2, name: '麦当劳', money: '299,132' },
          { no: 3, name: '海底捞', money: '283,223' },
          { no: 4, name: '西贝筱面村', money: '266,223' },
          { no: 5, name: '汉堡王', money: '266,223' },
          { no: 6, name: '必胜客', money: '219,663' },
          { no: 7, name: '真功夫', money: '200,993' }
        ]
      } else if (this.activeIndex === '2') {
        this.chartOptions.title.text = '年度用户访问数据'
        this.chartOptions.series[0].data = [
          320,
          82,
          80,
          334,
          390,
          258,
          220,
          150,
          500,
          200,
          240,
          290
        ]
        this.rankData = [
          { no: 1, name: '肯德基', money: '323,234' },
          { no: 2, name: '西贝筱面村', money: '266,223' },
          { no: 3, name: '麦当劳', money: '299,132' },
          { no: 4, name: '汉堡王', money: '266,223' },
          { no: 5, name: '海底捞', money: '283,223' },
          { no: 6, name: '必胜客', money: '219,663' },
          { no: 7, name: '真功夫', money: '200,993' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;

  /* header区域 */
  .menu-wrapper {
    display: flex;
    position: relative;
    /* 菜单栏 */
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    /* 剩余右侧 */
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }

  /* body区域 */
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    /* 图形 */
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    /* 列表 */
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333333;
            &.top-no {
              background: #000000;
              border-radius: 50%;
              color: #ffffff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
