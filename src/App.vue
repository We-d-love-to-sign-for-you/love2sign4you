<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Register' }">Register</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #nav {

    text-align: center;
  }

  #nav a {
    text-decoration: none;
    text-align: center;
    font-size: 1.5em;
    color: #45c24c;
    margin: 0 5% 0 0;
  }

  #nav a:hover {
    color: #24ff58;
  }
</style>
