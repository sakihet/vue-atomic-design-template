<template>
  <div id="app" class="container">
    <NavBar />
    <div class="content">
      <router-view class="view" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/organisms/AppFooter'
import NavBar from './components/organisms/NavBar'

export default {
  name: 'app',
  components: {
    AppFooter,
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
.container {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
}
.view {
  width: 70%;
  margin: 0 auto 0 auto;
}
</style>
