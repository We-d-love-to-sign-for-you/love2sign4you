<template>
  <div>
    <h2 id="welcome">Willkommen, Max</h2>
    <CvToggle @click="onReadyToggle" :value="toggleValue" :label="'Ich bin fürs Dolmetschen verfügbar'">
      <template v-if="use_textLeft" slot="text-left">Aus</template>
      <template v-if="use_textRight" slot="text-right">An</template>
    </CvToggle>
  </div>
</template>

<script>
  export default {
    name: "Page",
    props: {
      interpreter: Object
    },
    data: function () {
      return {
        toggleValue: "1",
        "use_textLeft": true,
        "use_textRight": true
      }
    },
    methods: {
      onReadyToggle: function() {
        if(this.toggleValue === "1") {
          this.interpreter.available = false;
          this.sendRequestNotAvailable();
          this.toggleValue =  "0";
        } else if(this.toggleValue === "0") {
          this.interpreter.available = true;
          this.sendRequstAvailable();
          this.toggleValue =  "1";
        }
      },
      sendRequstAvailable: function(){

      },
      sendRequestNotAvailable: function() {

      }
    }
  }
</script>

<style scoped>
  #welcome {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 50px;
    font-family: 'Raleway', sans-serif;
  }

</style>