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
        <h1>Services</h1>
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

        <form v-if="formStatus !== 'notSelected'">
          <fieldset>
            <h1>Add Service</h1>
          </fieldset>
        </form>
      </div>
    </div>

    <hr>

  </section>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false,
      formStatus: 'notSelected' // editing, new, empty, notSelected
    }
  },
  computed: {
    hasServices: () => false
  }
}
</script>
