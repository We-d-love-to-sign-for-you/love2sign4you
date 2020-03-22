<template>
  <CvSideNavLink class="nav-link" :href="href">
    <component class="nav-icon" :is="icon"></component>
    <span class="nav-link-text">{{text}}</span>
  </CvSideNavLink>
</template>

<script>
  export default {
    name: "Link",
    props: {
      icon: Object,
      text: String,
      href: String
    }
  }
</script>

<style scoped>
  .nav-link{
    padding-top: 20px;
  }

  .nav-icon {
    vertical-align: middle;
    height: 22px;
  }
  .nav-link-text {
    margin-left: 30px;
    font-size: 1.3em;
  }
</style>