<template>
  <span class="app-tag">{{ label }}</span>
</template>

<script>
export default {
  name: 'AppTag',
  data () {
    return {}
  },
  props: {
    label: String
  }
}
</script>

<style scoped>
.app-tag {
  background-color: #4fc08d;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 3px;
}
</style>
