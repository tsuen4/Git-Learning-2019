<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <template v-if="this.$store.getters.isSignedIn">
          <li>
            <router-link to="my-status">解答状況</router-link>
          </li>
        </template>
        <template v-if="this.$store.getters.isAdmin">
          <li>
            <router-link to="/manage">ユーザーの解答状況</router-link>
          </li>
        </template>
      </ul>
      <ul v-if="this.$store.getters.isSignedIn">
        <li v-for="tutorial in gitTutorials" :key="tutorial.contents">
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
      gitTutorials: [
        { name: '1. Git とは', contents: '/what-is-the-git' },
        { name: '2. リポジトリの作成', contents: '/create-repository' },
        { name: '3. 変更内容の記録', contents: '/commit' },
        { name: '4.1 ブランチによる分岐と統合', contents: '/branch' },
        { name: '4.2 コミットのやり直し', contents: '/amend' },
        { name: '4.3 作業の取り消し', contents: '/checkout' },
        { name: '5. GitHub へプッシュ', contents: '/github-create-repository' }
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
  border-bottom: 1px solid #bbb;
  list-style-position: inside;
  line-height: 2em;
  padding-left: 10px;
}
</style>
