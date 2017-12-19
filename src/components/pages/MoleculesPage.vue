<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>SearchForm</h2>
    <SearchForm />
    <h2>HorizontalLinkList</h2>
    <HorizontalLinkList :links="links" />
  </div>
</template>

<script>
import HorizontalLinkList from '../molecules/HorizontalLinkList'
import SearchForm from '../molecules/SearchForm'

export default {
  name: 'MoleculesPage',
  data () {
    return {
      msg: 'Molecules',
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
    HorizontalLinkList,
    SearchForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
