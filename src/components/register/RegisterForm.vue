<template>
    <div id="container">
        <RegisterNavigation :title="title" @backLinkClicked="handleBackLinkClicked"/>
        <EnterPersonalData @nextButtonClicked="personalDataEntered" v-show="isVisibleEnterPersonalData"/>
        <SelectSkillLevel @nextButtonClicked="skillLevelSelected" v-show="isVisibleSelectSkillLevel"/>
    </div>
</template>

<script>
import EnterPersonalData from "./EnterPersonalData.vue"
import SelectSkillLevel from "./SelectSkillLevel.vue"
import RegisterNavigation from "./RegisterNavigation.vue"

export default {
    name: "RegisterForm",
    components: {
        EnterPersonalData,
        SelectSkillLevel,
        RegisterNavigation
    },
    data: function() {
        return {
            title : 'REGISTRIEREN',
            isVisibleEnterPersonalData : true,
            isVisibleShowSelectSkillLevel: false
        }
    },
    methods: {
        handleBackLinkClicked: function() {
            if (this.isVisibleEnterPersonalData) {
                this.$router.push("/");
            } else {
                this.showEnterPersonalData();
            }
        },
        showEnterPersonalData: function() {
            this.title = 'REGISTRIEREN';
            this.isVisibleEnterPersonalData = true;
            this.isVisibleSelectSkillLevel = false;
        },
        showSelectSkillLevel: function() {
            this.title = 'ERZÄHL UNS MEHR';
            this.isVisibleEnterPersonalData = false;
            this.isVisibleSelectSkillLevel = true;
        },
        personalDataEntered: function(personalData) {
            alert(personalData);
            this.showSelectSkillLevel();
        },
        skillLevelSelected: function(skillLevel) {
            alert(skillLevel);
            this.$router.push("/Dashboard");
        }
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:Black&display=swap');
  
  #container {
    float: left;
    margin-top: 153px;
    margin-left: 180px;
  }
</style>