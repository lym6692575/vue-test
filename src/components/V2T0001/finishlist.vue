<template>
  <div class="finishList">
    <h1>我是第二个组件</h1>
    <li v-for="finishlist in finishlists" :key="finishlist.id">
      {{ finishlist.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'finishList',
  props: ['finishlists'],
}
</script>

<style></style>
