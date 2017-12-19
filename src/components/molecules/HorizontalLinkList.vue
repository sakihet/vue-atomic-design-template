<template>
  <div class="horizontal-link-list">
    <ul>
      <li v-for="link in links" :key="link.label">
         <AppLink
          :label="link.label"
          :path="link.path"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AppLink from '../atoms/AppLink'

export default {
  name: 'HorizontalLinkList',
  components: {
    AppLink
  },
  data () {
    return {}
  },
  props: {
    links: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal-link-list ul {
  padding-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.horizontal-link-list ul li {
  display: inline-block;
}
</style>
