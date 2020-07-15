<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:33:27
 * @LastEditTime: 2020-07-15 17:17:28
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
      type: String
    },
    value: {
      type: String
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
</style>
