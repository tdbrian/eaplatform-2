<template>
  <div>
    <services-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import ServicesSidebar from './ServicesSidebar'
export default {
  components: {
    ServicesSidebar
  }
}
</script>
