import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboards/Dashboards'
import MainDashboard from '@/components/dashboards/MainDashboard'
import BrowserApps from '@/components/browser-apps/BrowserApps'
import BrowserAppsList from '@/components/browser-apps/BrowserAppsList'
import Services from '@/components/services/Services'
import ServicesList from '@/components/services/ServicesList'
import BusinessDomains from '@/components/business-domains/BusinessDomains'
import BusinessDomainsList from '@/components/business-domains/BusinessDomainsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard/main' },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [ { path: '', redirect: 'main' }, { path: 'main', component: MainDashboard } ]
    },
    {
      path: '/browser-apps',
      component: BrowserApps,
      children: [ { path: '', redirect: 'list' }, { path: 'list', component: BrowserAppsList } ]
    },
    {
      path: '/services',
      component: Services,
      children: [ { path: '', redirect: 'list' }, { path: 'list', component: ServicesList } ]
    },
    {
      path: '/business-domains',
      component: BusinessDomains,
      children: [ { path: '', redirect: 'list' }, { path: 'list', component: BusinessDomainsList } ]
    }
  ],
  linkActiveClass: 'active',
  mode: 'hash'
})
