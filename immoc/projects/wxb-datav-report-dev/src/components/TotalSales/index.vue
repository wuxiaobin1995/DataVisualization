<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:43:37
 * @LastEditTime: 2020-07-24 14:44:01
 * @Description : TotalSales-累计销售额
-->
<template>
  <common-card title="累计销售额" value="¥ 36,706,987">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">22.36%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">58.22%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TotalSales',

  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    color: #666666;
    font-size: 12px;
  }
}
</style>
