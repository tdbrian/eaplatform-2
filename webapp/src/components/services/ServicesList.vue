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
    <div class="info" v-if="!hasServices && formStatus === 'empty'">
      There are no services yet. Ready to add one?
      <br>
      <button class="btn btn-primary mt-3" @click="formStatus = 'new'">Create First Service</button>
    </div>

    <div class="master-detail" v-else-if="formStatus !== 'empty'">

      <!-- Services column -->
      <div class="col-7">
        <div class="d-flex justify-content-between mb-2">
          <h1>Services</h1>
          <button class="btn btn-outline-primary" @click="createNewService" v-if="formStatus !== 'new'">
            <i class="zmdi zmdi-plus-circle"></i> New Service
          </button>
        </div>

        <div v-if="services">
          <h3 class="text-center mt-5" v-if="services.length === 0">
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
              <tr :class="{ selectable: true, selected: service._id !== undefined && service._id === selectedService._id }" v-for="service in services" :key="service.name" @click="selectService(service)">
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

        <h3 class="text-center mt-5" v-if="formStatus === 'notSelected'">
          Please select one of the services to the left.
        </h3>

        <form v-if="formStatus !== 'notSelected'" @submit.prevent="attemptSave">
          <fieldset>
            <h1 class="mb-3" v-if="formStatus === 'new'">Add Service</h1>
            <h1 class="mb-3" v-if="formStatus === 'edit'">Edit Service</h1>
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
            <button type="button" class="btn btn-outline-danger" v-if="formStatus === 'edit'" @click="deleteService">Delete Service</button>
            <br>
            <button type="submit" class="btn btn-primary mt-4">Save</button>
            <button type="reset" class="btn btn mt-4" @click="resetForm">Cancel</button>
          </fieldset>
        </form>
      </div>

    </div>

    <hr>

  </section>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    loading: false,
    formStatus: 'empty', // empty, notSelected, new, edit
    services: [],
    selectedService: {
      name: '',
      description: ''
    }
  }),
  async created () {
    this.getServices()
  },
  methods: {
    createNewService () {
      this.formStatus = 'new'
      this.selectedService = {
        name: '',
        description: ''
      }
      this.$nextTick(() => {
        this.errors.clear()
      })
    },
    async attemptSave () {
      let preSaveService = {...this.selectedService}
      let validation = await this.$validator.validateAll()
      if (validation) {
        try {
          if (this.formStatus === 'new') {
            this.services.push(this.selectedService)
            axios.post(`api/services`, this.selectedService)
          }
          if (this.formStatus === 'edit') axios.put(`api/services`, this.selectedService)
        } catch (e) {
          if (this.formStatus === 'new') {
            this.services.filter(service => service.name !== this.selectedService.name)
          } else if (this.formStatus === 'edit') {
            this.selectedService = {...preSaveService}
          }
        } finally {
          this.getServices()
          this.formStatus = 'notSelected'
          this.selectedService = {
            name: '',
            description: ''
          }
        }
      }
    },
    resetForm () {
      this.formStatus = 'notSelected'
      this.selectedService = {
        name: '',
        description: ''
      }
    },
    async getServices () {
      const { data } = await axios.get(`/api/services`)
      this.services = data
      if (data && data.length > 0) this.formStatus = 'notSelected'
    },
    selectService (service) {
      this.selectedService = service
      this.formStatus = 'edit'
    },
    deleteService () {
      let preDeletedService = {...this.selectedService}
      try {
        axios.delete(`/api/services/${this.selectedService._id}`)
        this.services = this.services.filter(service => service._id !== this.selectedService._id)
      } catch (error) {
        this.services.push(preDeletedService)
      } finally {
        this.getServices()
        this.formStatus = 'notSelected'
        this.selectedService = {
          name: '',
          description: ''
        }
      }
    }
  },
  computed: {
    hasServices: () => this.services && this.services.length() > 0
  }
}
</script>
