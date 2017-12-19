<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>SearchForm</h2>
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '../molecules/SearchForm'

export default {
  name: 'MoleculesPage',
  data () {
    return {
      msg: 'Molecules'
    }
  },
  components: {
    SearchForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
