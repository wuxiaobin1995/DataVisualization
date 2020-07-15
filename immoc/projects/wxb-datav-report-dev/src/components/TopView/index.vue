<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 11:30:15
 * @LastEditTime: 2020-07-15 21:10:41
 * @Description : TopView-顶部区域
-->
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <!-- 累计销售额 -->
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>

      <!-- 累计订单量 -->
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>

      <!-- 今日交易用户数 -->
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>

      <!-- 累计用户数 -->
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalOrder from '../TotalOrder'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'

export default {
  name: 'TopView',

  components: {
    TotalSales,
    TotalOrder,
    TodayUsers,
    TotalUsers
  }
}
</script>

<style lang="scss" scoped></style>
