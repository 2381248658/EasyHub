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
  <div class="test">
    test scss
  </div>
</template>

<style lang="scss">
.test {
  color: $priceColor;
}
</style>
