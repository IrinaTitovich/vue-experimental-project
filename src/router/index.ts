import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)




const ROUTE_NAMES = {
    home:'Home',
    main:'Main',
    about:'About'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
  }
  ,
  {
    path: `/${ROUTE_NAMES.about.toLowerCase()}`,
    name: ROUTE_NAMES.about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
