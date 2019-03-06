import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '../components/login'
import addEvents from '../components/addEvents'
import Events from '../components/eventsComponent'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/events'
    },
    {
      path:'/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/addevents',
      name: 'addEvents',
      component: addEvents,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('addevents')
  else next()
})

export default router