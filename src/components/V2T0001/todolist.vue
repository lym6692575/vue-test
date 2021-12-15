<template>
  <div class="todolist">
    <h1>我是第一个组件</h1>
    <li v-for="(todolist, index) in todolists" :key="todolist.id">
      {{ todolist.name }}
      <button>完成</button>
      <button @click="childDeleteToDoList(index)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'toDoList',
  props: ['todolists'],
  methods: {
    childDeleteToDoList(index) {
      this.$parent.deleteToDoList(index)
    },
  },
}
</script>

<style></style>
