<template>
  <CvSideNav id="side-nav" fixed expanded>
    <Header :max-height="200" :max-width="200"/>
    <CvSideNavItems id="nav-items">
      <Link :text="'Account'" :icon="UserAvatar32" :href="'javascript:void(0)'"/>
      <Link :text="'Einstellungen'" :icon="Settings32" :href="'javascript:void(0)'"/>
      <Link id="logout" :text="'Log out'" :icon="Power32" :href="'javascript:void(0)'"/>
    </CvSideNavItems>
  </CvSideNav>
</template>

<script>
  import Link from "./Link";
  import UserAvatar32 from "@carbon/icons-vue/lib/user--avatar/32"
  import Settings32 from "@carbon/icons-vue/lib/settings/32"
  import Power32 from "@carbon/icons-vue/lib/power/32"

  export default {
    name: "Sidebar",
    components: {
      Link
    },
    created() {
      // Add icons to this
      Object.assign(this, {
        UserAvatar32,
        Settings32,
        Power32
      });
    }
  }
</script>

<style scoped>
  #side-nav {
    margin: 3% 0 0 3%;
  }

  #logout {
    margin: 500px 0 0 0;
  }
</style>