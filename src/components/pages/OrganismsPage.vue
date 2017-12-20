<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>NavBar</h2>
    <NavBar />
    <h2>AppFooter</h2>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../organisms/AppFooter'
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
    AppFooter,
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
