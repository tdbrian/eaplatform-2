<template>
  <div class="section-nav">
    <logo/>
    <div class="header">
      <i class="zmdi zmdi-view-dashboard"></i>
      Dashboards
    </div>
    <router-link to="/dashboard/main">Main Dashboard</router-link>
  </div>
</template>

<script>
import Logo from '../layout/Logo'
export default {
  components: { Logo }
}
</script>
