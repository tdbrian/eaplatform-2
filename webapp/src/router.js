import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboards/Dashboards'
import MainDashboard from '@/components/dashboards/MainDashboard'
import BrowserApps from '@/components/browser-apps/BrowserApps'
import BrowserAppsList from '@/components/browser-apps/BrowserAppsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard/main' },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [ { path: '', redirect: 'main' }, { path: 'main', name: 'MainDashboard', component: MainDashboard } ]
    },
    {
      path: '/browser-apps',
      component: BrowserApps,
      children: [ { path: '', redirect: 'apps-list' }, { path: 'list', name: 'AppsList', component: BrowserAppsList } ]
    }
  ],
  linkActiveClass: 'active',
  mode: 'hash'
})
