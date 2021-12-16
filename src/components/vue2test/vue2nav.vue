<template>
  <div class="V2Tnav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="V2T_0001"
      active-text-color
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      v-for="item in V2Tul_li"
      :key="item.id"
    >
      <el-menu-item :index = item.route @click="handerSkip(item.id)">
        <span slot="title">{{ item.li_name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "V2Tnav",
  components: {},
  created() {
    // const arr = this.ulInitArr();
    this.V2Tul_li = this.ulInitArr();
    console.log(this.V2Tul_li);
  },
  data() {
    return {
      V2Tul_li: [],
      isCollapse: true
    };
  },
  methods: {
    handerSkip(id) {
      // console.log(id)
      this.$router.push("/V2THome/" + id);
    },
    ulInitArr() {
      var str = "[";
      var i;
      var max = 60;
      for (i = 1; i < max; i++) {
        var x1 = ("000" + i).substr(-4);
        var x2 = "V2T" + x1;
        var addstr = '{"id":"' + x1 + '",' + '"li_name":"' + x2 + '"},';
        str = str.concat(addstr);
      }
      str = str.slice(0, str.length - 1).concat("]");
      return JSON.parse(str);
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
