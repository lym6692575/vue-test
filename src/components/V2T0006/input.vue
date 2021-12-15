<template>
  <div>
    <p>123</p>
    <input
      type="button"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'input',
  props: ['value'],
}
</script>

<style></style>
