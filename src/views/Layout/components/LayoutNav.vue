<template>
  <nav class="nav-main">
    <div class="nav-inner">
      <a href="#">周杰伦</a>
      <a href="#">退出登录</a>
      <a href="#">我的订单</a>
      <a href="#">会员中心</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-main {
  height: 53px;
  background-color: #333;
}

.nav-inner {
  width: 1240px;
  margin: 0 auto;
  height: 100%;

  /* Flex 布局核心配置 */
  display: flex;
  /* 1. 子元素靠右对齐 */
  justify-content: flex-end;
  /* 2. 子元素垂直居中 */
  align-items: center;

}

/* 链接样式 */
.nav-inner a {
  /* 链接必须是块级或行内块级元素才能设置 padding/margin/border */
  display: block;
  /* 行高设置为 1 即可 */
  line-height: 1;
  color: #cdcdcd;
  font-size: 14px;
  /* 设置左右内边距 */
  padding: 0 15px;
  // 设置文字样式
  text-decoration: none;
}

/* 创建垂直分割线 (推荐使用 border-left) */
.nav-inner a:not(:first-child) {
  /* 或者使用 .nav-inner a ~ a { ... } */
  border-left: 2px solid #666;
  /* 只给非第一个链接添加左边框 */
}

/* 悬停效果 */
.nav-inner a:hover {
  color: $xtxColor;
  /* 悬停时颜色改变 */
}
</style>
