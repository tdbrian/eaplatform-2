<template>
  <div>
    <dashboard-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import DashboardSidebar from './DashboardsSidebar'
export default {
  components: {
    DashboardSidebar
  }
}
</script>
