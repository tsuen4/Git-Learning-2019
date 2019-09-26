import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', component: () => import(/* webpackChunkName: "404" */ './components/404.vue') },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { isPublic: true }
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import(/* webpackChunkName: "manage" */ './views/Manage.vue'),
      meta: { isAdmin: true }
    },
    {
      path: '/my-status',
      name: 'my-status',
      component: () => import(/* webpackChunkName: "my-status" */ './views/MyStatus.vue')
    },
    {
      path: '/what-is-the-git',
      name: 'what-is-the-git',
      component: () => import(/* webpackChunkName: "what-is-the-git" */ './views/text/what-is-the-git.vue')
    },
    {
      path: '/create-repository',
      name: 'create-repository',
      component: () => import(/* webpackChunkName: "create-repository" */ './views/text/create-repository.vue')
    },
    {
      path: '/commit',
      name: 'commit',
      component: () => import(/* webpackChunkName: "commit" */ './views/text/commit.vue')
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import(/* webpackChunkName: "branch" */ './views/text/branch.vue')
    },
    {
      path: '/amend',
      name: 'amend',
      component: () => import(/* webpackChunkName: "amend" */ './views/text/amend.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "checkout" */ './views/text/checkout.vue')
    },
    {
      path: '/github-create-repository',
      name: 'github-create-repository',
      component: () => import(/* webpackChunkName: "github-create-repository" */ './views/text/github-create-repository.vue')
    }
  ],
  // スクロール位置を保存 & 保存されていないページは一番上に
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // このルートはログインされているかどうか認証が必要です。
  // もしされていないならば、ログインページにリダイレクトします。
  if (to.matched.some(record => !record.meta.isPublic) && !store.getters.isSignedIn) {
    next({
      path: '/'
    })
  } else {
    next()
  }
  if (to.matched.some(record => record.meta.isAdmin)) {
    if (!store.getters.isAdmin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router
