import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/NewItemsPage',
    name: 'NewItemsPage',

    component: () => import(/* webpackChunkName: "about" */ '../views/NewItemsPage.vue')
  },

  {
    path: '/keys',
    name: 'Keys',
    component: () => import(/* webpackChunkName: "about" */ '../views/KeysPage.vue')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import(/* webpackChunkName: "about" */ '../views/CasePage.vue')
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountsPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
