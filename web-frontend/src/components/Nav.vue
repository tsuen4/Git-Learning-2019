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
        { id: 1, name: 'Git とは', contents: '/what-is-the-git' },
        { id: 2, name: 'リポジトリの作成', contents: '/create-repository' },
        { id: 3, name: 'item3', contents: '/id3' }
      ]
    }
  }
}
</script>

<style>
</style>
