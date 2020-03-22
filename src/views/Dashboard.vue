<template>
  <div>

    <Page id="page"/>
    <Sidebar/>
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

#page {
  margin-left: 400px;
  margin-top: 100px;
}
</style>