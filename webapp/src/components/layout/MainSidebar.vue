<template>
  <nav>
    <a href="#" class="active" title="Dashboards">
      <i class="zmdi zmdi-view-dashboard"></i>
    </a>
    <a href="#" title="User Interfaces">
      <i class="zmdi zmdi-apps"></i>
    </a>
    <a href="#" title="Business Domain">
      <i class="zmdi zmdi-case"></i>
    </a>
    <a href="#" title="Services">
      <i class="zmdi zmdi-rss"></i>
    </a>
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
  nav {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 65px;
    background-color: white;
    border-right: solid 1px #dedede;
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
        color: #0ca57c;
        border-left: solid 4px #0ca57c;
      }
    }
  }
</style>

