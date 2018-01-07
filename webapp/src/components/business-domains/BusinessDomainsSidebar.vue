<template>
  <div class="section-nav">
    <logo/>
    <div class="header">
      <i class="zmdi zmdi-device-hub"></i>
      Domain Objects
    </div>
    <router-link to="/business-domains/list"> List</router-link>
  </div>
</template>

<script>
import Logo from '../layout/Logo'
export default {
  components: { Logo }
}
</script>
