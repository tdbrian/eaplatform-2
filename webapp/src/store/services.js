import axios from 'axios'
import * as mutations from '../constants/mutation-types'
import * as getters from '../constants/getter-types'
import * as actions from '../constants/action-types'

export default {
  state: {
    loading: false,
    formStatus: 'empty', // empty, notSelected, new, edit
    services: [],
    selectedService: {
      _id: undefined,
      name: '',
      description: '',
      deleted: false
    }
  },

  mutations: {
    [mutations.SET_SERVICES] (state, services) {
      if (services && services.length > 0) state.formStatus = 'notSelected'
      state.services = services
    },

    [mutations.SETUP_NEW_SERVICE] (state, newService) {
      state.formStatus = 'new'
      state.selectedService = {
        name: '',
        description: ''
      }
    },

    [mutations.SELECT_SERVICE] (state, selectedService) {
      state.selectedService = selectedService
      state.formStatus = 'edit'
    },

    [mutations.SET_SELECTED_SERVICE] (state, service) {
      state.selectedService = {...service}
    },

    [mutations.ADD_SERVICE] (state, service) {
      state.services.push(service)
    },

    [mutations.REMOVE_SERVICE] (state, service) {
      state.services = state.services.filter(service => service._id !== state.selectedService._id)
    },

    [mutations.RESET_SERVICE_FORM] (state) {
      state.formStatus = 'notSelected'
      state.selectedService = {
        name: '',
        description: ''
      }
    },

    [mutations.SET_SERVICE_NOT_SELECTED] (state) { state.formStatus = 'notSelected' }
  },

  actions: {

    async [actions.GET_SERVICES] ({ state, commit }) {
      const { data } = await axios.get(`/api/services`)
      commit(mutations.SET_SERVICES, data)
    },

    [actions.DELETE_SERVICE] ({ state, commit, dispatch }) {
      let preDeletedService = {...state.selectedService}
      try {
        axios.delete(`/api/services/${state.selectedService._id}`)
        commit(mutations.REMOVE_SERVICE, state.selectedService)
      } catch (error) {
        commit(mutations.ADD_SERVICE, preDeletedService)
      } finally {
        dispatch(actions.GET_SERVICES)
        commit(mutations.RESET_SERVICE_FORM)
      }
    },

    async [actions.SAVE_SERVICE] ({ state, commit, dispatch }, service) {
      let preSaveService = {...service}
      try {
        if (state.formStatus === 'new') {
          commit(mutations.ADD_SERVICE, service)
          axios.post(`api/services`, service)
        } else if (state.formStatus === 'edit') {
          axios.put(`api/services`, service)
        }
      } catch (e) {
        if (state.formStatus === 'new') {
          state.services.filter(service => service.name !== state.selectedService.name)
        } else if (state.formStatus === 'edit') {
          state.selectedService = {...preSaveService}
        }
      } finally {
        commit(mutations.RESET_SERVICE_FORM)
        dispatch(actions.GET_SERVICES)
      }
    }
  },

  getters: {
    [getters.HAS_SERVICES]: state => {
      if (state.services) {
        return state.services.length > 0
      }
      return false
    },
    [getters.SERVICES_EMPTY]: state => state.formStatus === 'empty',
    [getters.SERVICES_NOT_SELECTED]: state => state.formStatus === 'notSelected',
    [getters.SERVICES_NEW_FORM]: state => state.formStatus === 'new',
    [getters.SERVICES_EDIT_FORM]: state => state.formStatus === 'edit'
  }
}
