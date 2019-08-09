<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul>
        <router-link
          tag="li"
          :to="tutorial.contents"
          v-for="tutorial in tutorials"
          :key="tutorial.id"
        >{{tutorial.name}}</router-link>
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
        { id: 3, name: '変更内容の記録', contents: '/git-commit' },
        { id: 4, name: 'ブランチによる分岐と統合', contents: '/branch' }
      ]
    }
  }
}
</script>

<style>
#tutorial-list ul {
  list-style-type: none;
  margin-left: -30px;
}
</style>
