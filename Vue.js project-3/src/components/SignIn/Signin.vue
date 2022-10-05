<script setup>
import { ref } from "vue";
import InputMail from "../Inputs/InputMail.vue";
import InputPassword from "../Inputs/InputPassword.vue";

const email = ref("");
const password = ref("");
const props = defineProps(["colorTheme"]);
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
  <div :class="[props.colorTheme == true ? 'form__login_light' : 'form__login_dark']">
    <form class="form__content" @submit.prevent="loginHandler">
      <h2>LOGİN</h2>
      <InputMail v-model:email="email"></InputMail>
      <InputPassword v-model:password="password"></InputPassword>
      <button :class="[props.colorTheme == true ? '__button_light':'__button_dark']" type="submit">LOGIN</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form__login_light {
  background-color: #ececec;
  width: 100%;
  padding: 15%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: blue;
}
.form__login_dark {
  background-color: black;
  width: 100%;
  padding: 15%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: white;
}
.form__content > h2{
  font-size: 50px;
}

.__button_light {
  margin-top: 10%;
  width: 100%;
  background-color: blue;
  color: white;
}
.__button_dark {
  margin-top: 10%;
  width: 100%;
  background-color: white;
  color: black;
}
</style>
