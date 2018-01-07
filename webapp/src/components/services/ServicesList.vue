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
        <div class="d-flex justify-content-between">
          <h1>Services</h1>
          <button class="btn btn-outline-primary" @click="formStatus = 'new'">
            <i class="zmdi zmdi-plus-circle"></i> New Service
          </button>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr class="selectable">
              <td>Test Project</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add/edit service column -->
      <div class="col-5 detail">

        <h3 class="text-center mt-5" v-if="formStatus === 'notSelected'">
          Please select one of the services to the left.
        </h3>

        <form v-if="formStatus !== 'notSelected'" @submit.prevent="validateBeforeSubmit">
          <fieldset>
            <h1 class="mb-4">Add Service</h1>
            <div class="form-group">
              <label for="name">Name</label>
              <input name="name"
                id="name"
                type="text"
                class="form-control"
                placeholder="Enter service name"
                v-model="selectedService.name"
                v-validate="'required|alpha_spaces|max:150'">
              <span v-show="errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</span>
              <small class="form-text text-muted">No special format and can contain spaces.</small>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea name="description"
                id="description"
                class="form-control"
                v-model="selectedService.description"
                v-validate="'alpha_spaces|max:500'"
                placeholder="Enter some info about the service..."
                rows="6"></textarea>
              <span v-show="errors.has('description')" class="invalid-feedback">{{ errors.first('description') }}</span>
            </div>
            <button type="submit" class="btn btn-primary mt-2">Submit</button>
          </fieldset>
        </form>
      </div>

    </div>

    <hr>

  </section>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    formStatus: 'new', // editing, new, empty, notSelected,
    selectedService: {
      name: '',
      description: ''
    }
  }),
  methods: {
    async validateBeforeSubmit () {
      let validation = await this.$validator.validateAll()
      if (validation) {
        alert('From Submitted!')
      }
    }
  },
  computed: {
    hasServices: () => false
  }
}
</script>
