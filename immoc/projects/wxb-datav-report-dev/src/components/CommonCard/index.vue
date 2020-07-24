<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:33:27
 * @LastEditTime: 2020-07-24 15:25:54
 * @Description : CommonCard-通用卡片组件
-->
<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line" />
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',

  props: {
    title: {
      type: String,
      default: '标题为空'
    },
    value: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999999;
}
.value {
  font-size: 25px;
  color: #000000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eeeeee;
}
.total {
  font-size: 12px;
  color: #666666;
}

/* 这些样式属于在父组件中定义的class，因为这些是CommonCard的通用样式，就写在CommonCard通用组件中 */
/* 加粗字体 */
.emphasis {
  margin-left: 5px;
  color: #333333;
  font-weight: 700;
}
/* 向上小三角 */
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
/* 向下小三角 */
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
