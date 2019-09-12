<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul>
        <router-link
          tag="li"
          :to="tutorial.contents"
          v-for="tutorial in tutorials"
          :key="tutorial.contents"
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
        { name: 'Home', contents: '/' },
        { name: 'Git とは', contents: '/what-is-the-git' },
        { name: 'リポジトリの作成', contents: '/create-repository' },
        { name: '変更内容の記録', contents: '/commit' },
        { name: 'ブランチによる分岐と統合', contents: '/branch' },
        { name: 'コミットのやり直し', contents: '/amend' },
        { name: '作業の取り消し', contents: '/git-reset' }
      ]
    }
  }
}
</script>

<style>
#tutorial-list ul {
  list-style-type: none;
  margin-left: -40px;
}

#tutorial-list li {
  border-bottom: 1px solid #BBB;
  list-style-position: inside;
  line-height:2.0em;
  padding-left: 10px;
}
</style>
