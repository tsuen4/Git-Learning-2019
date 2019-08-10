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
      component: Home
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
      component: () => import('./views/text/WhatIsTheGit.vue')
    },
    {
      path: '/create-repository',
      name: 'create-repository',
      component: () => import('./views/text/CreateRepository.vue')
    },
    {
      path: '/git-commit',
      name: 'git-commit',
      component: () => import('./views/text/GitCommit.vue')
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('./views/text/Branch.vue')
    },
    {
      path: '/git-amend',
      name: 'git-amend',
      component: () => import('./views/text/GitAmend.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
