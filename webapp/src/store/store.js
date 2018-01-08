import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    services
  },
  strict: true
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./services'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const services = require('./services').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        services
      }
    })
  })
}

export default store
