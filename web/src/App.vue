<template>
  <div id="app">
    <Login />
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
    Login,
    AppNav
  },
  data: () => {
    return {
      existTerm: false
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

#nav {
  float: left;
  position: fixed;
  width: 250px;
}

#text-view {
  padding: 20px 20px 0 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-padding {
  padding: 15px 15px 0 15px;
}

.text-padding:last-child {
  padding-bottom: 15px;
}

hr {
  border: 0.5px solid #bbb;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #f05033;
}

/* width: 1024px 以上 */
@media (min-width: 1024px) {
  #app {
    margin: auto;
    width: 90%;
  }
}
</style>
