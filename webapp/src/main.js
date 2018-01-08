// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VeeValidate from 'vee-validate'

import './styles/styles.scss'

Vue.config.productionTip = false

var valConfig = {
  classes: true,
  classNames: {
    invalid: 'is-invalid'
  }
}

Vue.use(VeeValidate, valConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
