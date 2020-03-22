<template>
    <cv-side-nav id="side-nav" fixed expanded>
      <cv-side-nav-items>
        <cv-side-nav-link href="javascript:void(0)">
          <template slot="nav-icon"><Fade16 /></template>
          Account
        </cv-side-nav-link>
        <cv-side-nav-link href="javascript:void(0)">
          <template slot="settings-icon"><Fade16 /></template>
          Einstellungen
        </cv-side-nav-link>
        <cv-side-nav-link href="javascript:void(0)">
          <template slot="nav-icon"><Fade16 /></template>
          Log out
        </cv-side-nav-link>
      </cv-side-nav-items>
    </cv-side-nav>
</template>

<script>


export default {
  name: 'Dashboard',

}
</script>
