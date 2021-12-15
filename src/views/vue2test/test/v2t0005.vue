<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
  </div>
</template>

<script>
export default {
  name: 'V2T0005',
  data() {
    return {
      message: 'Hello Vue.js!',
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
  },
}
</script>
