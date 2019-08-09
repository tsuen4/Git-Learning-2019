<template>
  <div id="app">
    <Nav></Nav>
    <Tutorial></Tutorial>
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
@import url('../node_modules/github-markdown-css/github-markdown.css');

/* レイアウト確認用の枠線 */
div {
  /* border: 0.05px dotted #000000; */
}

body {
  margin: 0px;
}

#nav {
  float: left;
  position: fixed;
  top: 0;
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;
}

/* 767px 以下 */
@media (max-width: 767px) {
  .markdown-body {
    padding: 10px;
  }
}

/*
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
