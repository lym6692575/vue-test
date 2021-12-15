<template>
  <el-menu
    router
    mode="horizontal"
    class="nav"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="activeIndex"
  >
    <el-menu-item index="/">导航首页</el-menu-item>
    <el-menu-item index="/V2THome">Vue2.*文档练习2021-12-5</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'navigation',
  computed: {
    activeIndex() {
      return '/'
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
