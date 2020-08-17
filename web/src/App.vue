<template>
  <div id="app">
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
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
  top: 0;
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

.markdown-body {
  box-sizing: border-box;
  min-width: 300px;
  margin: 0 auto 20px;
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
