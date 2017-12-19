<template>
  <router-link class="app-link" :to="path">{{ label }}</router-link>
</template>

<script>
export default {
  name: 'AppLink',
  data () {
    return {}
  },
  props: {
    label: String,
    path: String
  }
}
</script>

<style scoped>
.app-link {
  color: #4fc08d;
  text-decoration: none;
  margin: 0 4px 0 4px;
}
.router-link-exact-active {
  border-bottom: 2px solid #4fc08d;
}
</style>
