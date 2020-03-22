<template>
    <div id="nav">
        <button id="backLink" v-on:click="emitBackLinkClickedEvent">
            <img id="backArrow" src="images/BackArrow.png" alt="">
            <span id="backText">Zurück</span>
        </button>
        <h1 id="title">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: "RegisterNavigation",
    props: {title : String},
    methods: {
        emitBackLinkClickedEvent: function() {
            this.$emit('backLinkClicked');
        }
    }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:Black&display=swap');

  #nav {
      display: flex;
      align-items: center;
      margin-left: 376px;
  }

  #title {
    font-family: 'Raleway', sans-serif;
    font-size: 53.33px;
    margin-left: 70px;
  }

  #backArrow {
      width: 14px;
      height: auto;
  }

  #backLink {
      display: flex;
      align-items: center;
      background: none;
      border: none;
  }

  #backText {
      margin-left: 25px;
      font-size: 14px;
      font-weight: 550;
      color: #565656;
      text-decoration: none;
  }

</style>