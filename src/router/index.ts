import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const ROUTE_NAMES = {
    home:'Home',
    main:'Main',
    reservedTrips:'reserved-trips',
    cards:'Cards',
    card:'Card',
    admin:{
      admin:'Admin',
      reservedTrips:'reserved-trips',
      addDirection:'add-direction'
    }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: ROUTE_NAMES.home,
    component: Home
  },
  {
    path: `/${ROUTE_NAMES.main.toLowerCase()}`,
    name: ROUTE_NAMES.main,
    // route level code-splitting
    // this generates a separate chunk (main.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue')
  },
  {
    path: `/${ROUTE_NAMES.admin.admin.toLowerCase()}/${ROUTE_NAMES.admin.reservedTrips.toLowerCase()}`,
    name: ROUTE_NAMES.admin.reservedTrips,
    // route level code-splitting
    // this generates a separate chunk (admin-page.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin-page" */ '../views/ReservedTrips.vue')
  },
  {
    path: `/${ROUTE_NAMES.admin.admin.toLowerCase()}/${ROUTE_NAMES.admin.addDirection.toLowerCase()}`,
    name: ROUTE_NAMES.admin.addDirection,
    component: () => import(/* webpackChunkName: "cards" */ '../views/Admin.vue'),
    // beforeEnter: (to, from, next) => {
    //     if (store.state.auth) {
    //         next()
    //     } else {
    //         next({ name: 'home' })
    //     }
    // }
},
  {
    path: `/${ROUTE_NAMES.cards.toLowerCase()}`,
    name: ROUTE_NAMES.cards,
    // route level code-splitting
    // this generates a separate chunk (cards.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
      path: `/${ROUTE_NAMES.cards.toLowerCase()}/:name`,
      name: ROUTE_NAMES.card,
      component: () => import(/* webpackChunkName: "cards" */ '../views/Card.vue'),
      // beforeEnter: (to, from, next) => {
      //     if (store.state.auth) {
      //         next()
      //     } else {
      //         next({ name: 'home' })
      //     }
      // }
  },

{
  path: `/${ROUTE_NAMES.cards.toLowerCase()}/:name`,
  name: ROUTE_NAMES.trips,
  component: () => import(/* webpackChunkName: "cards" */ '../views/Admin.vue'),
  // beforeEnter: (to, from, next) => {
  //     if (store.state.auth) {
  //         next()
  //     } else {
  //         next({ name: 'home' })
  //     }
  // }
},
  {
      path: '*',
      redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
