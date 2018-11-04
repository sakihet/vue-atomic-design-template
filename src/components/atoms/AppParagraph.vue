<template>
  <p
    :class="align"
  >
    {{ content }}
  </p>
</template>

<script>
export default {
  name: 'AppParagraph',
  data () {
    return {}
  },
  props: {
    content: String,
    align: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>
