<template>
  <div class="hello">
    <p class="margin">
      <span> id:{{ msg.id }} </span>
      {{ msg.title }}
    </p>
    <button class="margin" @click="$emit('enlarge-text', 0.1)">
      测试$emit传递方法测试字体变大
    </button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {}
  },
  created() {},
  props: ['msg'],
  methods: {
    testSize() {
      return 0.1
    },
  },
}
</script>

<style lang="sass" scoped>
.hello
  border-bottom: solid 1px black
.margin
  margin-bottom: 10px;
</style>
