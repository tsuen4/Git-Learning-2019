<template>
  <div id="app">
    <Nav></Nav>
    <Tutorial></Tutorial>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Tutorial from '@/components/Tutorial.vue'

export default {
  components: {
    Nav,
    Tutorial
  }
}
</script>

<style>
/* レイアウト確認用の枠線 */
div {
  /* border: 0.05px dotted #000000; */
}

body {
  margin: 0px;
}

#app {
  padding: 0px;
}

#nav {
  float: left;
  width: 200px;
}

#tutorial {
  margin-left: 200px;
}

#git-text {
  padding: 10px;
}

#terminal-box {
  background-color: #424242;
  color: white;
  position: fixed;
  width: 80%;
  margin-left: -10px;
  bottom: 0;

  height: 300px;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

/* width: 1024px 以上 */
@media (min-width: 1024px) {
  #app {
    margin: auto;
    width: 80%;
  }
  #terminal-box {
    width: calc(80% - 200px);
  }
}
</style>
