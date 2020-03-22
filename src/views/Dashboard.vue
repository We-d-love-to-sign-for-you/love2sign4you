<template>
  <div>
    <Sidebar/>
    <Page/>
  </div>
</template>

<script>
  import Sidebar from "../components/dashboard/Sidebar";
  import Page from "../components/dashboard/Page";

  export default {
    name: 'Dashboard',
    components: {
      Sidebar,
      Page
    }
  }
</script>
<style scoped>

</style>