<script setup>
import { ref } from "vue";
import InputFullName from "../Inputs/InputFullName.vue";
import InputMail from "../Inputs/InputMail.vue";
import InputPhone from "../Inputs/InputPhone.vue";
import InputPassword from "../Inputs/InputPassword.vue";

const emit = defineEmits(["register"]);
const registerForm = ref({
  fullName: "",
  phoneNumber: "",
  email: "",
  password: "",
  retryPassword: "",
});

const submitHandler = () => {
  if (registerForm.value.password == registerForm.value.retryPassword) {
    emit("register", true);
    localStorage.setItem("userInfo", JSON.stringify(registerForm.value));
  } else {
    emit("register", false);
    alert("Şifreler uyuşmuyor.");
  }
};

const goSignin = () => {
  emit("register", true);
};
</script>

<template>
  <div class="form__card">
    <h2>REGİSTER</h2>
    <form class="forms" @submit.prevent="submitHandler">
      <InputFullName v-model:name="registerForm.fullName"></InputFullName>
      <InputMail v-model:email="registerForm.email"></InputMail>
      <InputPhone v-model:phoneNumber="registerForm.phoneNumber"></InputPhone>
      <InputPassword v-model:password="registerForm.password"></InputPassword>
      <InputPassword
        v-model:password="registerForm.retryPassword"
      ></InputPassword>
      <button class="button_register" type="submit">Kayıt Ol</button><br />
    </form>
    <button class="form__loginbtn" @click="goSignin">Hesabınız var mı ? Giriş yap</button>
  </div>
</template>

<style scoped lang="scss">

.form__card{
  background-color: #ECECEC;
  padding: 15%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color:Blue;
}
.__loginbtn{
  background-color: white;
  color: black;
}
</style>
