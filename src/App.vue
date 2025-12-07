<script setup>
import { getCategory } from '@/apis/testAPI'
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await getCategory()
  console.log(res);
})
</script>

<template>
  <!-- 一级路由出口组件 -->
  <router-view />
</template>

<style scoped></style>
