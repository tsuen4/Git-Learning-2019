<template>
  <div id="nav">
    <div id="tutorial-list">
      <ul v-if="isGit()">
        <li v-for="tutorial in git_tutorials" :key="tutorial.contents">
          <router-link :to="tutorial.contents">{{tutorial.name}}</router-link>
        </li>
      </ul>
      <ul v-else-if="isGitHub()">
        <li v-for="tutorial in github_tutorials" :key="tutorial.contents">
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
      git_tutorials: [
        { name: 'Home', contents: '/' },
        { name: 'Git とは', contents: '/what-is-the-git' },
        { name: 'リポジトリの作成', contents: '/create-repository' },
        { name: '変更内容の記録', contents: '/commit' },
        { name: 'ブランチによる分岐と統合', contents: '/branch' },
        { name: 'コミットのやり直し', contents: '/amend' },
        { name: '作業の取り消し', contents: '/checkout' }
      ],
      github_tutorials: [
        { name: 'Home', contents: '/' },
        { name: 'GitHub-Flow', contents: '/github-flow' }
      ]
    }
  },
  methods: {
    isGit: function () {
      let result = Boolean(this.$store.getters.isSignedIn && this.$store.getters.materials === 'git')
      return result
    },
    isGitHub: function () {
      let result = Boolean(this.$store.getters.isSignedIn && this.$store.getters.materials === 'github')
      return result
    },
    getMaterials: function () {
      return this.$store.getters.materials
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
