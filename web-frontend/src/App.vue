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
body {
  margin: 0px;
}

#app {
  padding: 0px;
  /* width: 1000px; */
  /* margin: auto; */
}

div {
  /* border: 1px dotted #000000; */
}

#nav {
  float: left;
  width: 200px;
}

#tutorial {
  margin-left: 200px;
  padding: 10px;
  /* width: 780px; */
}

#terminal-box {
  background-color: #424242;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
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
</style>
