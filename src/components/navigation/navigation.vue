<template>
  <div class="nav">
    <span class="nav-title">导航</span>
    <router-link to="/" class="nav-link">
      <span>Vue2.*练习首页</span>
    </router-link>
    <router-link to="/V2THome" class="nav-link">
      <span>Vue2.*文档练习2021-12-5</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="sass" scoped>
.nav
  line-height: 50px
  border-bottom: 1px solid #7e8c8d;
  .nav-title
    margin-right: 20px
  .nav-link
    margin-right: 20px
</style>