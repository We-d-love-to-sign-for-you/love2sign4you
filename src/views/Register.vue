<template>
  <div>
    <Header id="header" maxWidth="92"/>
    <RegisterForm/>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import RegisterForm from "../components/register/RegisterForm"

export default {
  name: 'Home',
  components: {
    Header,
    RegisterForm,
  }
};
</script>
