<script setup>
import { ref } from "vue";
import Register from "./components/Register/Register.vue";
import Signin from "./components/SignIn/Signin.vue";

const changeComp = ref(false);
const changeTheme = ref(false);

function changeHandler(value) {
  changeComp.value = value;
}
function changeThemeFunction() {
  changeTheme.value = !changeTheme.value;
  console.log(changeTheme.value);
}
</script>

<template>
  <div class="change__theme">
    <Button
      :class="[changeTheme == true ? '__themetbtn_light' : '__themetbtn_dark']"
      @click="changeThemeFunction"
      >Change Theme</Button
    >
  </div>
  <template v-if="!changeComp">
    <Register @register="changeHandler" :colorTheme="changeTheme"></Register>
  </template>
  <template v-else>
    <Signin :colorTheme="changeTheme"></Signin>
  </template>
</template>

<style scoped>
.change__theme {
  position: relative !important;
  margin-bottom: 10px;
  margin-left: 20%;
}
.__themetbtn_light {
  color: black;
  background-color: white;
}
.__themetbtn_dark {
  color: white;
  background-color: gray;
}
</style>
