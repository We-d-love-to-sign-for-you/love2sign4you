<template>
    <div id="container">
        <div id="nav">
            <img id="backArrow" src="images/BackArrow.png" alt="">
            <a id="backLink" href="">ZURÜCK</a>
            <h1 id="title">REGISTRIEREN</h1>
        </div>
        <div id="formContainer">
            <cv-text-input label="Vorname" placeholder="Max" class="spaced"/>
            <cv-text-input label="Nachname" placeholder="Mustermann" class="spaced"/>
            <cv-text-input label="E-Mail" placeholder="Max.mustermann@gmx.de" class="spaced"/>
            <cv-text-input type="password" label="Passwort" placeholder="Min. 8 Buchstaben" class="spaced"/>
            <cv-button id="nextButton">Weiter</cv-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    props: {
    }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:Black&display=swap');
  
  #container {
    display: inline-block;
    vertical-align: middle;
    margin-top: 153px;
    margin-left: 180px;
    width: 595px;
  }

  #title {
      display: inline-block;
    font-family: 'Raleway', sans-serif;
    font-size: 53.33px;
  }

  #backArrow {
      display:inline-block;
  }

  #backLink {
      display: inline-block;
      font-size: 14px;
      font-weight: 550;
      color: #565656;
      text-decoration: none;
  }

  #formContainer {
      width: 288px;
      margin-left: 576px;
  }

  #formContainer > .spaced {
      margin-top: 15px;
  }

  #nextButton {
      margin-top: 68px;
      margin-left: 82px;
  }
</style>