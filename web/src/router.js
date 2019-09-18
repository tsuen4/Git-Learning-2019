import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
