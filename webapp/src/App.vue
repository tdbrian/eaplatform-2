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
  #app {
    margin-left: 65px;
  }
</style>
