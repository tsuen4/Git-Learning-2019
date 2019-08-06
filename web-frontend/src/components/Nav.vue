<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul>
        <li v-for="tutorial in tutorials" :key="tutorial.id">
          <router-link :to="tutorial.contents">{{tutorial.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => {
    return {
      tutorials: [
        { id: 0, name: 'Home', contents: '/' },
        { id: 1, name: 'About', contents: '/about' },
        { id: 2, name: 'item1', contents: '/id1' },
        { id: 3, name: 'item2', contents: '/id2' },
        { id: 4, name: 'item3', contents: '/id3' }
      ]
    }
  }
}
</script>

<style>
</style>
