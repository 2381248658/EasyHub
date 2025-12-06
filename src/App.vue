<script setup>
import { getCategory } from '@/apis/testAPI'
import { onMounted } from 'vue';
onMounted(async () => {
  const res = await getCategory()
  console.log(res);
})
</script>

<template>
  <el-button type="primary">主色按钮</el-button>
  <el-button type="success">成功按钮</el-button>

</template>

<style scoped></style>
