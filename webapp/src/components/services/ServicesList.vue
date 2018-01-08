<template>
  <section class="page">

    <header class="default-padding">
      <div class="title">
        <h3>Services</h3>
        <h1>Services List</h1>
      </div>
    </header>

    <hr class="mt-3">

    <div class="info" v-if="loading"></div>

    <!-- No services message -->
    <div class="info" v-if="!HAS_SERVICES && SERVICES_EMPTY">
      There are no services yet. Ready to add one?
      <br>
      <button class="btn btn-primary mt-3" @click="SETUP_NEW_SERVICE">Create First Service</button>
    </div>

    <div class="master-detail" v-else-if="!SERVICES_EMPTY">

      <!-- Services column -->
      <div class="col-7">
        <div class="d-flex justify-content-between mb-2">
          <h1>Services</h1>
          <button class="btn btn-outline-primary" v-if="SERVICES_NEW_FORM" @click="SETUP_NEW_SERVICE">
            <i class="zmdi zmdi-plus-circle"></i> New Service
          </button>
        </div>

        <div v-if="services">
          <h3 class="text-center mt-5" v-if="!HAS_SERVICES">
            No services yet.
          </h3>

          <table class="table table-striped" v-if="services.length">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr :class="{ selectable: true, selected: service._id !== undefined && service._id === selectedService._id }" v-for="service in services" :key="service.name" @click="SELECT_SERVICE(service)">
                <td>{{service.name}}</td>
                <td v-if="service.description">{{service.description}}</td>
                <td v-if="!service.description">(no description)</td>
                <td>{{service.type}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add/edit service column -->
      <div class="col-5 detail">

        <h3 class="text-center mt-5" v-if="SERVICES_NOT_SELECTED">
          Please select one of the services to the left.
        </h3>

        <form v-if="SERVICES_NOT_SELECTED" @submit.prevent="attemptSave()">
          <fieldset>
            <h1 class="mb-3" v-if="SERVICES_NEW_FORM">Add Service</h1>
            <h1 class="mb-3" v-if="SERVICES_EDIT_FORM">Edit Service</h1>
            <div class="form-group">
              <label for="name">Name</label>
              <input name="name"
                id="name"
                type="text"
                class="form-control"
                placeholder="Enter service name"
                v-model="selectedService.name"
                v-validate="'required|max:150'">
              <span v-show="errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</span>
              <small class="form-text text-muted">No special format and can contain spaces.</small>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea name="description"
                id="description"
                class="form-control"
                v-model="selectedService.description"
                v-validate="'max:500'"
                placeholder="Enter some info about the service..."
                rows="3"></textarea>
              <span v-show="errors.has('description')" class="invalid-feedback">{{ errors.first('description') }}</span>
            </div>
            <button type="button" class="btn btn-outline-danger" v-if="SERVICES_EDIT_FORM" @click="DELETE_SERVICE">Delete Service</button>
            <br>
            <button type="submit" class="btn btn-primary mt-4">Save</button>
            <button type="reset" class="btn btn mt-4" @click="RESET_SERVICE_FORM">Cancel</button>
          </fieldset>
        </form>
      </div>

    </div>

    <hr>

  </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import * as mutations from '../../constants/mutation-types'
import * as getters from '../../constants/getter-types'
import * as actions from '../../constants/action-types'
export default {
  async created () {
    this.GET_SERVICES()
  },
  methods: {
    async attemptSave (service) {
      let validation = await this.$validator.validateAll()
      if (validation) {
        this.$store.dispatch(actions.SAVE_SERVICE, this.selectedService)
      }
    },
    ...mapActions([
      actions.DELETE_SERVICE,
      actions.GET_SERVICES
    ]),
    ...mapMutations([
      mutations.SELECT_SERVICE,
      mutations.RESET_SERVICE_FORM,
      mutations.SETUP_NEW_SERVICE
    ])
  },
  computed: {
    ...mapState({
      loading: state => state.services.loading,
      services: state => state.services.services
    }),
    ...mapGetters([
      getters.HAS_SERVICES,
      getters.SERVICES_EMPTY,
      getters.SERVICES_NOT_SELECTED,
      getters.SERVICES_NEW_FORM,
      getters.SERVICES_EDIT_FORM
    ]),
    selectedService: {
      get () {
        return this.$store.state.services.selectedService
      },
      set (value) {
        debugger
        this.$store.commit(mutations.SET_SELECTED_SERVICE, value)
      }
    }
  }
}
</script>
