<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>NavBar</h2>
    <NavBar />
  </div>
</template>

<script>
import NavBar from '../organisms/NavBar'

export default {
  name: 'OrganisimsPage',
  data () {
    return {
      msg: 'Organisms',
      links: [
        {
          label: 'Index',
          path: '/'
        },
        {
          label: 'Atoms',
          path: '/atoms'
        },
        {
          label: 'Molecules',
          path: '/molecules'
        }
      ]
    }
  },
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
