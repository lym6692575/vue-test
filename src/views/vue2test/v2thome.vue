<template>
  <div class="V2THome">
    <Nav class="HomeNav"></Nav>
    <div class="V2TWapper">
      <div class="V2TPageNavWapper">
        <VNav></VNav>
      </div>
      <div class="V2TpageWapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation/navigation'
import vue2testNav from '@/components/vue2test/vue2nav.vue'

export default {
  name: 'V2THome',
  data() {
    return {}
  },
  components: {
    Nav: navigation,
    VNav: vue2testNav,
  },
  methods: {
    toDoSkip(event) {
      console.log(event)
      console.log(1)
    },
  },
  computed: {},
}
</script>

<style lang="sass" scoped>
.V2THome
  overflow: scroll
  .HomeNav
    text-align: center
  .V2TWapper
    margin-top: 20px
    .V2TPageNavWapper
      float: left
    .V2TpageWapper
      padding-left: 40px;
      float: left
</style>
