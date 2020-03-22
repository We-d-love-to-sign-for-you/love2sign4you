<template>
    <div id="formContainer">
        <p>Wie würdest du deine Kenntnisse einschätzen?</p>
        <cv-radio-group :vertical="true" @change="actionChange">
            <cv-radio-button name="skill" label="Grundkenntnisse" value="BASIC" v-model="skilLevel" checked/>
            <cv-radio-button name="skill" label="Fließend" value="FLUENT" v-model="skillLevel"/>
            <cv-radio-button name="skill" label="Professionell" value="PROFESSIONAL" v-model="skillLevel"/>
            <cv-radio-button name="skill" label="Muttersprachler*in" value="NATIVE" v-model="skillLevel"/>
        </cv-radio-group>
        <cv-button id="nextButton" v-on:click="emitNextButtonClickedEvent">Weiter</cv-button>
    </div>
</template>

<script>
export default {
    name: "SelectSkillLevel",
    props: {
    },
    data: function() {
        return {
            skillLevel: "BASIC",
        }
    },
    methods: {
        emitNextButtonClickedEvent: function() {
            this.$emit('nextButtonClicked', this.skillLevel);
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