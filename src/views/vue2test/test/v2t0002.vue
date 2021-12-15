<template>
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</template>

<script>
export default {
  name: "V2T0002",
  data() {
    return { message: '页面加载于 ' + new Date().toLocaleString() };
  },
};
</script>

<style>
</style>