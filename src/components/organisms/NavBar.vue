<template>
  <div class="nav-bar">
    <div class="nav-bar-cell left">
      <AppLogo />
    </div>
    <div class="nav-bar-cell center">
      <HorizontalLinkList
        :links="links"
      />
    </div>
    <div class="nav-bar-cell right">
      ■
    </div>
  </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLogo from '../atoms/AppLogo'
import HorizontalLinkList from '../molecules/HorizontalLinkList'

export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          path: '/',
          label: 'Index'
        },
        {
          path: '/atoms',
          label: 'Atoms'
        },
        {
          path: '/molecules',
          label: 'Molecules'
        },
        {
          path: '/organisms',
          label: 'Organisms'
        }
      ]
    }
  },
  components: {
    AppLink,
    AppLogo,
    HorizontalLinkList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  border-bottom: 1px solid #eee;
  display: flex;
}
.nav-bar-cell {
  flex: 1;
}
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
