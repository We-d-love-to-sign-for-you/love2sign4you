<template>
  <div>
    <Header id="header" maxWidth="92"/>
    <div id="content">
      <h1 id="title">
        YOU'D LOVE TO SIGN?
      </h1>
      <p id="text">
        Diese Plattform verbindet Menschen mit Hörbehinderungen und Menschen der Deaf Community, welche auf einen Gebärdensprachübersetzer*in angewiesen sind, mit einem Mitglied des von uns erschaffenden Netzwerkes, welches als Dolmetscher*in für die Gebärden- und die Lautsprache fungiert.
        <br />
        <br />
        Registriere dich jetzt als Gebärdensprachübersetzer*in:
      </p>
      <cv-button id="registerButton" :kind="primary" v-on:click="handleClickOnRegisterButton">Jetzt registrieren</cv-button>
    </div>    
    <img id="logo" src="images/LogoSW.png" alt="">
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  name: 'Home',
  components: {
    Header,
  },
  methods: {
    handleClickOnRegisterButton : function() {
      this.$router.push("/Register");
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:Black&display=swap');

  #header {
    margin-left: 38px; 
    float: left;
  }

  #content {
    margin-top: 153px;
    margin-left: 180px;
    width: 595px;
    float: left;
  }

  #title {
    font-family: 'Raleway', sans-serif;
    font-size: 53.33px;
  }

  #text {
    font-size: 16px;
    line-height: 24px;
    margin-top: 58px;
    width: 546px;
  }

  #logo {
    height: 605px;
    margin-top: 153px;
    margin-left: 112px;
    float: left;
  }

  #registerButton {
    margin-top: 60px;
  }
</style>