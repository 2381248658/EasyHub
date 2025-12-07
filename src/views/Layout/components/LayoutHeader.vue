<template>
  <header class="header-main">
    <div class="header-cotainer">
      <h1 class="logo">
        <a href="/">EasyHub</a>
      </h1>
      <ul class="header-title">
        <li><a href="#">居家</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">服饰</a></li>
        <li><a href="#">母婴</a></li>
        <li><a href="#">个护</a></li>
        <li><a href="#">严选</a></li>
        <li><a href="#">数码</a></li>
        <li><a href="#">运动</a></li>
        <li><a href="#">杂项</a></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-main {
  width: 1240px;
  height: 132px;
  margin: 0 auto;
  // 显示页面区域需要 完成时删去
  background-color: skyblue;
}

.header-cotainer {
  display: flex;
  align-items: center;
  /* 确保它撑满了父容器的高度 */
  height: 100%;
}

.logo {
  width: 200px;
  height: 100%; // 继承 header-main 的高度

  a {
    display: block;
    height: 100%;
    width: 100%;

    text-indent: -9999px;
    background: url('@/assets/images/logo.png') no-repeat center center / contain;
  }
}

.header-title {
  display: flex;
  width: 820px;
  padding-left: 40px;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    list-style-type: none;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      // ⚠️ 补充：移除下划线
      text-decoration: none;
      color: #333;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}
</style>
