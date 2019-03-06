import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuefire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'


Vue.use(vuefire)

require("dotenv").config({ path: "keys.env" })

firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
})

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})


