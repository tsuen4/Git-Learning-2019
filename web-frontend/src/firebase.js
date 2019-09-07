import firebase from 'firebase/app'
import 'firebase/auth'
import store from './store'

const firebaseConfig = {
  apiKey: 'AIzaSyB9SN6tC_qiLIEWgKVFwFwiRPPyH8hnXIQ',
  authDomain: 'oecu-git-learning.firebaseapp.com',
  databaseURL: 'https://oecu-git-learning.firebaseio.com',
  projectId: 'oecu-git-learning',
  storageBucket: '',
  messagingSenderId: '190976867786',
  appId: '1:190976867786:web:701e4ded9dfcb3ed'
}

export default {
  init () {
    firebase.initializeApp(firebaseConfig)
  },
  signUp () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
      hd: 'oecu.jp'
    })
    firebase.auth().signInWithRedirect(provider)
  },
  signOut () {
    firebase.auth().signOut()
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.commit('onAuthStateChanged', user)
        store.commit('onUserStatusChanged', true)
      } else {
        store.commit('onAuthStateChanged', { email: '', displayName: '' })
        store.commit('onUserStatusChanged', false)
      }
    })
  }
}
