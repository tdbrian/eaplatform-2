<template>
  <nav>
    <router-link to="/dashboard/main" title="Dashboards">
      <i class="zmdi zmdi-view-dashboard"></i>
    </router-link>
    <router-link to="/browser-apps/list" title="Browser App">
      <i class="zmdi zmdi-desktop-windows"></i>
    </router-link>
    <router-link to="/services/list" title="Services">
      <i class="zmdi zmdi-rss"></i>
    </router-link>
    <router-link to="/business-domains/list" title="Business Domain">
      <i class="zmdi zmdi-case"></i>
    </router-link>
    <a href="#" title="Personas">
      <i class="zmdi zmdi-accounts-list"></i>
    </a>
    <a href="#" title="Integrations">
      <i class="zmdi zmdi-input-composite"></i>
    </a>
    <a href="#" title="Security">
      <i class="zmdi zmdi-shield-security"></i>
    </a>
    <a href="#" title="Systems Management &amp; Usage">
      <i class="zmdi zmdi-play"></i>
    </a>
    <a href="#" title="Testing &amp; Issue Tracking">
      <i class="zmdi zmdi-bug"></i>
    </a>
    <a href="#" title="Business Analytics">
      <i class="zmdi zmdi-chart"></i>
    </a>
    <a href="#" title="Settings">
      <i class="zmdi zmdi-settings"></i>
    </a>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../styles/_variables';
  nav {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: $main-nav-size;
    background-color: white;
    border-right: solid 1px $border-color;
    a {
      color: #a7a7a7;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 50px;
      font-size: 24px;
      text-decoration: none;
      transition: 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover,&.active {
        color: $primary-color;
        border-left: solid 4px $primary-color;
      }
    }
  }
</style>

