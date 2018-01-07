<template>
  <div class="section-nav">
    <logo/>
    <div class="header">
      <i class="zmdi zmdi-rss"></i>
      Services
    </div>
    <router-link to="/services/list">Services List</router-link>
    <div class="header">
      <i class="zmdi zmdi-pin-assistant"></i>
      Pinned Services
    </div>
    <router-link to="/services/customer-billing-area">User Accounts</router-link>
    <router-link to="/services/customer-billing-area">Primary Alias Swap</router-link>
  </div>
</template>

<script>
import Logo from '../layout/Logo'
export default {
  components: { Logo }
}
</script>
