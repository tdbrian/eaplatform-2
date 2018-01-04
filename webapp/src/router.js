import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/dashboard',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  linkActiveClass: 'active',
  mode: 'hash'
})
