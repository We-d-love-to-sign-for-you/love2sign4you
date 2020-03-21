<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Register' }">Register</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #nav {
    margin: 0 0 0 15%;
  }

  #nav a {
    text-decoration: none;
    text-align: center;
    color: #3d9bee;
    margin: 0 0 0 10%;
  }

  #nav a:hover {
    color: #1a4aff;
    margin: 0 0 0 10%;
  }
</style>
