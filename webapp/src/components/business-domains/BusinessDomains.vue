<template>
  <div>
    <business-domains-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import BusinessDomainsSidebar from './BusinessDomainsSidebar'
export default {
  components: {
    BusinessDomainsSidebar
  }
}
</script>
