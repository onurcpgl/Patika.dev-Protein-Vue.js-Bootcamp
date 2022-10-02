<script setup>
import { ref } from "vue";
import Register from "./components/Register/Register.vue";
import Signin from "./components/SignIn/Signin.vue";

const changeComp = ref(false);

function changeHandler(value) {
  changeComp.value = value;
}

</script>

<template>
  <template v-if="!changeComp">
    <Register @register="changeHandler"></Register>
  </template>
  <template v-else>
    <Signin></Signin>
  </template>
</template>

<style scoped></style>
