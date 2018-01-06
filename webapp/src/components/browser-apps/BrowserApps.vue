<template>
  <div>
    <browser-apps-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import BrowserAppsSidebar from './BrowserAppsSidebar'
export default {
  components: {
    BrowserAppsSidebar
  }
}
</script>
