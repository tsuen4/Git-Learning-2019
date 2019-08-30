import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import store from './store'
import 'firebase/auth'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyB9SN6tC_qiLIEWgKVFwFwiRPPyH8hnXIQ',
  authDomain: 'oecu-git-learning.firebaseapp.com',
  databaseURL: 'https://oecu-git-learning.firebaseio.com',
  projectId: 'oecu-git-learning',
  storageBucket: '',
  messagingSenderId: '190976867786',
  appId: '1:190976867786:web:701e4ded9dfcb3ed'
}

firebase.initializeApp(firebaseConfig)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.isPublic) && !store.getters.isSignedIn) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    next({
      path: '/'
    })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
