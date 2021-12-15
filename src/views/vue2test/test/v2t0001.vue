<template>
  <div class="toDoList">
    <h1 class="toDoListTitle">toDoList with login</h1>
    <input class="toDoListInput" type="text" ref="inputText" />
    <button @click="addToDoList(initAddListValue(), initAddId())">add</button>
    <div class="toDoListComponentsTab">
      <div class="toDoListComponentsTabWapper">
        <!-- 疑问 activeName -->
        <a
          class="componentsPicker"
          v-for="component in components"
          :key="component.id"
          :class="{ active: activeName == component.name }"
          @click="
            {
              onSelected(component.name), onTest(component.id);
            }
          "
        >
          {{ component.name }}
        </a>
      </div>
    </div>
    <component
      class="componentSwitch"
      :is="componentSwitch"
      :todolists="todolists"
      :finishlists="finishlists"
    ></component>
  </div>
</template>

<script>
import todolist from "@/components/V2T0001/todolist";
import finishlist from "@/components/V2T0001/finishlist";

// 测试通过index给id赋值

export default {
  name: "V2T0001",
  data() {
    return {
      components: [
        { id: 1, name: "待办事宜" },
        { id: 2, name: "已完成" },
      ],
      activeName: "待办事宜",
      todolists: [
        { id: 1, name: "todo测试数据1" },
        { id: 2, name: "todo测试数据2" },
        { id: 3, name: "todo测试数据3" },
      ],
      finishlists: [
        { id: 1, name: "finish测试数据1" },
        { id: 2, name: "finish测试数据2" },
      ],
      componentSwitch: "TodoList",
    };
  },
  watch: {
    todolists: function () {
      var _self = this;
      _self.indexBDId(this.todolists);
      console.log(this.todolists);
    },
  },
  components: {
    TodoList: todolist,
    FinishList: finishlist,
  },
  methods: {
    onSelected(name) {
      this.activeName = name;
    },
    onTest(id) {
      id == 1
        ? (this.componentSwitch = "TodoList")
        : (this.componentSwitch = "FinishList");
    },
    // 添加todoLIst
    addToDoList(toDoList, toDoListId) {
      arguments.length != 1
        ? this.todolists.push({
            id: toDoListId,
            name: toDoList,
          })
        : this.todolist.push(toDoList);
    },
    // 添加finishlists
    addFinishLists(list) {
      this.finishlists.push(list);
    },
    // 删除todoList
    deleteToDoList(index) {
      this.todolists.splice(index, 1);
    },
    // 完成todoList
    finishToDoList(index) {
      this.addFinishLists(this.todolists[index]);
      this.deleteToDoList(index);
    },
    // 初始化ListValue
    initAddListValue() {
      let toDoListValue = this.$refs.inputText.value;
      return toDoListValue;
    },
    initAddId() {
      let toDoListId = "";
      let length = this.todolists.length;
      length < 1 ? (toDoListId = 1) : (toDoListId = ++length);
      return toDoListId;
    },
    // index 绑定 ID
    indexBDId(lists) {
      for (let i = 0; i < lists.length; i++) {
        let x = i;
        lists[i].id = ++x;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.toDoList
  text-align: center
  border-bottom: solid 1px #8c8c8c
  .toDoListTitle
    font-size: 24px
    margin-bottom: 20px
  .toDoListInput
    border: solid 1px #bfbfbf
    margin: 0 10px 20px 0
  .toDoListComponentsTab
    width: 390px
    font-size: 16px
    .toDoListComponentsTabWapper
      text-align: center
      margin-bottom: 20px
    .componentsPicker
      height: 24px
      line-height: 24px
      padding: 0px 20px
      background: #bfbfbf
      border-bottom: solid 1px #8c8c8c
    .active
      font-weight: 550
      color: #434343
      background-color: #8c8c8c
  .componentSwitch
    text-align: center
</style>
