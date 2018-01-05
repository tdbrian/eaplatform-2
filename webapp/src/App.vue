<template>
  <div id="app">
    <main-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import MainSidebar from './components/layout/MainSidebar'
export default {
  name: 'app',
  components: {
    MainSidebar
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/_variables";
  #app {
    margin-left: $main-nav-size + $section-nav-width;
  }
</style>
