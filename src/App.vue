<template>
  <div id="app">
    <NavBar />
    <router-view class="view" />
  </div>
</template>

<script>
import NavBar from './components/organisms/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.view {
  width: 60%;
  margin: 0 auto 0 auto;
}
</style>
