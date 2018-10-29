import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import IndexPage from '@/components/pages/IndexPage'
import AtomsPage from '@/components/pages/AtomsPage'
import MoleculesPage from '@/components/pages/MoleculesPage'
import OrganismsPage from '@/components/pages/OrganismsPage'

Vue.use(Router)

export default new Router({
  base: '/vue-atomic-design-template/',
  mode: 'history',
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
      path: '/organisms',
      name: 'OrganismsPage',
      component: OrganismsPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
