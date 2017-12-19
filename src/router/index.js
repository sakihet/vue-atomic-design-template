import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import IndexPage from '@/components/pages/IndexPage'
import AtomsPage from '@/components/pages/AtomsPage'
import MoleculesPage from '@/components/pages/MoleculesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/atoms',
      name: 'AtomsPage',
      component: AtomsPage
    },
    {
      path: '/molecules',
      name: 'MoleculesPage',
      component: MoleculesPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
