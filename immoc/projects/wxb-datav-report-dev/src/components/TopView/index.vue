<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 11:30:15
 * @LastEditTime: 2020-07-15 17:27:58
 * @Description : TopView-顶部区域
-->
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>

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
