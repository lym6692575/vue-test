<template>
  <div class="V2Tnav">
    <ul class="V2T_ul">
      <li
        class="V2T_li"
        v-for="item in V2Tul_li"
        :key="item.id"
        @click="handerSkip(item.id)"
      >
        <router-link to="/">
          {{ item.li_name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'V2Tnav',
  components: {},
  created() {
    // const arr = this.ulInitArr();
    this.V2Tul_li = this.ulInitArr()
  },
  data() {
    return {
      V2Tul_li: [],
    }
  },
  methods: {
    handerSkip(id) {
      // console.log(id)
      this.$router.push('/V2THome/' + id)
    },
    ulInitArr() {
      var str = '['
      var i
      var max = 60
      for (i = 1; i < max; i++) {
        var x1 = ('000' + i).substr(-4)
        var x2 = 'V2T' + x1
        var addstr = '{"id":"' + x1 + '",' + '"li_name":"' + x2 + '"},'
        str = str.concat(addstr)
      }
      str = str.slice(0, str.length - 1).concat(']')
      return JSON.parse(str)
    },
  },
}
</script>

<style lang="sass" scoped>
.V2Tnav
  height: 100%
  overflow: scroll
  .V2T_ul
    width: 80px
    .V2T_li
      height: 40px
      line-height: 20px
      width: 80px
      float: left
      font-size: 16px
      list-style-type: none
</style>
