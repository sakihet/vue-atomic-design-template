<template>
  <a
    v-if="isNewWindow"
    class="app-link"
    :href="path"
    target="_blank"
  >
    {{ label }}
    <font-awesome-icon icon="external-link-alt" />
  </a>
  <router-link
    v-else
    class="app-link"
    :to="path"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'AppLink',
  data () {
    return {}
  },
  props: {
    label: String,
    path: String,
    isNewWindow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.app-link {
  color: #4fc08d;
  text-decoration: none;
  margin: 0 4px 0 4px;
}
.app-link:hover {
  color: #fff;
  background-color: #4fc08d;
}
.router-link-exact-active {
  margin-bottom: 4px;
  border-bottom: 2px solid #4fc08d;
}
</style>
