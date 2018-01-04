import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboards/Dashboards'
import MainDashboard from '@/components/dashboards/MainDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard/main' },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [ { path: '', redirect: 'main' }, { path: 'main', name: 'MainDashboard', component: MainDashboard } ]
    }
  ],
  linkActiveClass: 'active',
  mode: 'hash'
})
