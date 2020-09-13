import Vue from 'vue'
import VueRouter from 'vue-router'
import amigos from '../views/amigos.vue'
import fiestas from '../views/fiestas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/amigos',
    name: 'amigos',
    component: amigos
  },
  {
    path: '/',
    name: 'fiestas',
    component: fiestas
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
