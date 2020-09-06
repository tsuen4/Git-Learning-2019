<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <template v-if="this.$store.getters.isSignedIn">
          <li>
            <router-link to="/my-status">解答状況</router-link>
          </li>
        </template>
        <template v-if="this.$store.getters.isAdmin">
          <li>
            <router-link to="/manage">学生の解答状況</router-link>
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
        { name: '1. Git とは', contents: '/tutorial/what-is-the-git' },
        { name: '2. リポジトリの作成', contents: '/tutorial/git-create-repository' },
        { name: '3. 変更内容の記録', contents: '/tutorial/git-commit' },
        { name: '4.1 ブランチによる分岐と統合', contents: '/tutorial/git-branch' },
        { name: '4.2 コミットのやり直し', contents: '/tutorial/git-amend' },
        { name: '4.3 作業の取り消し', contents: '/tutorial/git-checkout' },
        { name: '5. GitHub へプッシュ', contents: '/tutorial/github-create-repository' }
      ]
    }
  }
}
</script>

<style>
#tutorial-list ul {
  list-style-type: none;
  /* ブラウザで指定されてる値を削除 */
  padding-inline-start: 0;
}

#tutorial-list li {
  border-bottom: 1px solid #bbb;
  list-style-position: inside;
  line-height: 2em;
  padding-left: 10px;
}

#tutorial-list li:last-child {
  border-bottom: none;
}
</style>
