<template>
  <button class="app-button">{{ label }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  data () {
    return {}
  },
  props: {
    label: String
  }
}
</script>

<style scoped>
.app-button {
  color: #4fc08d;
  border-color: #4fc08d;
  padding: 0.5em;
  box-shadow: 0.5px 0.5px;
}
.app-button:hover {
  color: #ffffff;
  background-color: #4fc08d;
}
</style>
