<template>
  <div>
    <h2 id="welcome">Willkommen, Max</h2>
    <CvToggle :value="toggleValue" :label="'Ich bin fürs Dolmetschen verfügbar'">
      <template v-if="use_textLeft" slot="text-left">Aus</template>
      <template v-if="use_textRight" slot="text-right">An</template>
    </CvToggle>
  </div>
</template>

<script>
    export default {
        name: "Page",
      data: function(){
          return {
            toggleValue:"1",
            "use_textLeft": true,
            "use_textRight": true
          }
      }
    }
</script>

<style scoped>
  #welcome {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 50px;
  }

</style>