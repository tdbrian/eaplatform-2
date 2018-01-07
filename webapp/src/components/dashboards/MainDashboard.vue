<template>
  <section class="page default-padding">

    <header class="mb-3">
      <div class="title">
        <h3>Dashboards</h3>
        <h1>Main Dashboard</h1>
      </div>
    </header>

    <div class="row">
      <div class="col-3">
        <div class="stats-item blue-background">
          <i class="zmdi zmdi-apps"></i>
          0 <br> <span>user interfaces</span>
        </div>
      </div>
      <div class="col-3">
        <div class="stats-item">
          <i class="zmdi zmdi-rss"></i>
          {{servicesCount}} <br> <span>services</span>
        </div>
      </div>
      <div class="col-3">
        <div class="stats-item grey-background">
          <i class="zmdi zmdi-accounts-outline"></i>
          0 <br> <span>developers</span>
        </div>
      </div>
      <div class="col-3">
        <div class="stats-item orange-background">
          <i class="zmdi zmdi-input-composite"></i>
          0 <br> <span>integrations</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    servicesCount: undefined
  }),
  async created () {
    const { data } = await axios.get(`/api/applications`)
    this.servicesCount = data.length
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/_variables';
  .stats-item {
    background-color: $primary-color;
    line-height: 25px;
    padding: 20px;
    color: white;
    border-radius: 3px;
    font-size: 36px;
    font-weight: 300;
    i {
      position: absolute;
      top: 10px;
      right: 30px;
    }
    span {
      font-size: 20px;
      text-transform: capitalize;
    }
    &.blue-background {
      background-color: #898b8e;
    }
    &.grey-background {
      background-color: #a7a7a7;
    }
    &.orange-background {
      background-color: #5d6469;
    }
  }
</style>

