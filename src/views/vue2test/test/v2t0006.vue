<template>
  <div class="V2T0006">
    <div>
      <h1>class绑定</h1>
      <div class="static" :class="{ active: isActive }">
        {{ message }}dom-1.class
      </div>
      <button @click="testOnClickChangeClass()">点我切换dom-1.class绑定</button>
    </div>
    <div>
      <h1>v-if条件渲染</h1>
      <template v-if="ok"><p>okk</p></template>
      <template v-else><p>not ok</p></template>
      <button @click="testOnClickChangeOk()">ok</button>
    </div>
    <div class="toDoItem">
      <h1>toDoItem</h1>

      <input v-model="newTodoText" id="new-todo" />
      <button @click="testAddtoDoList()">Add</button>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo.title }}
        <button @click="testOnRemoveList(index)">Remove</button>
      </li>
    </div>
    <div class="testEvent">
      <h1>测试$event是个什么玩意</h1>
      <button @click="eventLog($event)">鼠标点击</button><br />
      <button @click.ctrl="eventLog($event)">按Ctrl才能处罚</button>
    </div>
    <div class="blog" :style="{ fontSize: postFontSize + 'em' }">
      <h1>测试组件传值 & $emit & $event</h1>
      <li v-for="msg in msgFromDads" :key="msg.id">
        <hello :msg="msg" @enlarge-text="testSize($event)"></hello>
      </li>
    </div>
    <div>
      <h1>在组件上使用 v-model(没弄明白啥意思</h1>
      <p>123</p>
      <input type="text" v-focus />
      <customInput v-model="searchText"></customInput>
    </div>
    <div>
      <h1>原生事件绑定到组件</h1>
      <input type="text" />
    </div>
  </div>
</template>

<script>
import hello from '@/components/V2T0006/hello'
import customInput from '@/components/V2T0006/input'

export default {
  name: 'V2T0006',
  data() {
    return {
      message: '测试Class与Style绑定',
      isActive: false,
      ok: true,
      // todo
      todos: [
        {
          id: 1,
          title: 'todolist1',
        },
        {
          id: 2,
          title: 'todolist2',
        },
      ],
      newTodoText: '',
      msgFromDads: [
        { id: 1, title: 'dad1无可奉告' },
        { id: 2, title: 'dad2也无可奉告' },
        { id: 3, title: 'dad3也无可奉告' },
      ],
      postFontSize: 1,
    }
  },
  components: {
    hello: hello,
    customInput: customInput,
  },
  methods: {
    testOnClickChangeClass() {
      this.isActive = !this.isActive
    },
    testOnClickChangeOk() {
      this.ok = !this.ok
    },
    // toDoList
    // 删除
    testOnRemoveList(index) {
      this.todos.splice(index, 1)
    },
    // 添加
    testAddtoDoList() {
      let newId = this.todos.length
      newId++
      this.todos.push({
        id: newId,
        title: this.newTodoText,
      })
    },
    eventLog(event) {
      console.log(event)
      console.log(1)
    },
    testSize(event) {
      this.postFontSize = this.postFontSize += event
    },
  },
}
</script>

<style lang="sass" scoped>
.V2T0006
  *
    margin-bottom: 10px
  h1
    font-size: 30px;
    border-top: solid 1px black
    padding-top: 20px
  .static
  .active
    font-size : 20px
    color: red
.toDoItem
  li
    margin-bottom: 0px
  input
    border: solid 1px black
.testEvent
  input
    border: solid 1px black
</style>
