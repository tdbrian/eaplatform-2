<template>
  <div class="section-nav">
    <logo/>
    <div class="header">
      <i class="zmdi zmdi-desktop-windows"></i>
      Browser Apps
    </div>
    <router-link to="/browser-apps/list">Apps List</router-link>
    <div class="header">
      <i class="zmdi zmdi-pin-assistant"></i>
      Pinned Apps
    </div>
    <router-link to="/browser-apps/customer-billing-area">Customer Billing Area</router-link>
    <router-link to="/browser-apps/customer-billing-area">Parter Portal</router-link>
  </div>
</template>

<script>
import Logo from '../layout/Logo'
export default {
  components: { Logo }
}
</script>
