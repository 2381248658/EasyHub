<script setup>
import { getCategoryFilterAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getSubCategoryAPI } from '@/apis/category';
import GoodsItem from '../Home/components/GoodsItem.vue';
// 获取二级面包屑导航数据
const filterData = ref({})
const router = useRoute()
const getCategoryData = async () => {
  try {
    const res = await getCategoryFilterAPI(router.params.id)
    filterData.value = res.data.result
  } catch (err) {
    console.error('获取二级面包屑导航失败', err)
  }
}
onMounted(() => getCategoryData())

// 获取基本数据
const goodList = ref([])
const reqData = ref({
  categoryId: router.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  try {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.data.result.items
  } catch (err) {
    console.error("商品基本数据请求失败", err)
  }
}
onMounted(() => getGoodList())

// 点击按钮实现过滤功能
const tabChange = () => {
  // console.log("Tab切换啦！！！", reqData.value.sortField)
  // 重置分页
  reqData.value.page = 1
  getGoodList()
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName
          }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodList" :good="good" :key="good.id"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
