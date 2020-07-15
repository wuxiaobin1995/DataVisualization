<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 16:43:37
 * @LastEditTime: 2020-07-15 17:26:36
 * @Description : TotalSales-累计销售额
-->
<template>
  <common-card title="累计销售额" value="¥ 33,566,204">
    <template>
      <div class="compare"></div>
    </template>
    <template v-slot:footer>
      <div>
        昨日销售额
        <span class="money">¥ 30,000,000</span>
      </div>
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
.compare {
  height: 100%;
  background: yellow;
}
.money {
  margin-left: 5px;
  color: #333333;
  font-weight: 700;
}
</style>
