<template>
  <input class="app-input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'AppInput',
  data () {
    return {}
  },
  props: {
    type: String,
    placeholder: String
  }
}
</script>

<style scoped>
.app-input {
  color: #666;
  padding: 0.5em;
}
</style>
