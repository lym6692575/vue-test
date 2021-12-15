<template>
  <div class="index">
    <Nav></Nav>
    <h1 class="text">这是我练习的首页</h1>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    Nav : Navigation
  }
}
</script>

<style lang="sass" scoped>
.index 
  text-align: center;
</style>