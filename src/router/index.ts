import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)




const ROUTE_NAMES = {
    home:'Home',
    main:'Main',
    about:'About',
    cards:'Cards',
    card:'Card'
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
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue')
  },
  {
    path: `/${ROUTE_NAMES.about.toLowerCase()}`,
    name: ROUTE_NAMES.about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: `/${ROUTE_NAMES.cards.toLowerCase()}`,
    name: ROUTE_NAMES.cards,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
      path: '/cards/:name',
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
