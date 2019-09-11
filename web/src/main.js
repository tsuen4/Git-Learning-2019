import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './firebase'

Vue.config.productionTip = false

firebase.init()

router.beforeEach((to, from, next) => {
  // このルートはログインされているかどうか認証が必要です。
  // もしされていないならば、ログインページにリダイレクトします。
  if (to.matched.some(record => !record.meta.isPublic) && !store.getters.isSignedIn) {
    next({
      path: '/'
    })
  } else {
    next()
  }
  if (to.matched.some(record => record.meta.isAdmin)) {
    if (!store.getters.isAdmin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
