<template>
  <div id="app">
    <AppNav></AppNav>
    <AppTutorial></AppTutorial>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppTutorial from '@/components/AppTutorial.vue'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github.css'
hljs.registerLanguage('bash', bash)

export default {
  components: {
    AppNav,
    AppTutorial
  }
}
</script>

<style>
@import url("../node_modules/github-markdown-css/github-markdown.css");

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
  border:0.5px solid #BBB;
}

/*
#Appnav {
}

#Appnav a {
  font-weight: bold;
  color: #2c3e50;
}

#Appnav a.router-link-exact-active {
  color: #42b983;
} */

/* width: 1024px 以上 */
@media (min-width: 1024px) {
  #app {
    margin: auto;
    width: 90%;
  }
}
</style>
