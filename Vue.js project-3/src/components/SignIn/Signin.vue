<script setup>
import { ref } from "vue";
import InputMail from "../Inputs/InputMail.vue";
import InputPassword from "../Inputs/InputPassword.vue";



const email = ref("");
const password = ref("");

const localStorageValue = ref("");

const userIsActive = ref();

const loginHandler = () => {
  localStorageValue.value = JSON.parse(localStorage.getItem("userInfo"));

  if (
    email.value == localStorageValue.value.email &&
    password.value == localStorageValue.value.password
  ) {
    userIsActive.value = true;
    alert("Giriş işlemi başarılı");
  } else {
    userIsActive.value = false;
    alert("Kullanıcı adı veya şifre yanlış !!");
  }
};
</script>

<template>

<h2>LOGİN</h2>

  <form class="forms" @submit.prevent="loginHandler">
    <InputMail v-model:email="email"></InputMail>
    <InputPassword v-model:password="password"></InputPassword>
    <button type="submit">Gönder</button>
  </form>



</template>
