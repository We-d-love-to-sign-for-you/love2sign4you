<template>
    <div id="formContainer">
            <cv-text-input label="Vorname" placeholder="Max" class="spaced" v-model="personalData.firstName"/>
            <cv-text-input label="Nachname" placeholder="Mustermann" class="spaced" v-model="personalData.lastName"/>
            <cv-text-input label="E-Mail" placeholder="Max.mustermann@gmx.de" class="spaced" v-model="personalData.eMail"/>
            <cv-text-input type="password" label="Passwort" placeholder="Min. 8 Buchstaben" class="spaced" v-model="personalData.password"/>
            <cv-button id="nextButton" v-on:click="emitNextButtonClickedEvent">Weiter</cv-button>
    </div>
</template>

<script>
export default {
    name: "EnterPersonalData",
    props: {
    },
    data: function() {
        return {
            personalData : {
                firstName : "",
                lastName : "",
                eMail : "",
                password : "",
            }
        }
    },
    methods: {
        emitNextButtonClickedEvent: function() {
            this.$emit('nextButtonClicked', this.personalData);
        }
    }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:Black&display=swap');

  #formContainer {
      margin-top: 55px;
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