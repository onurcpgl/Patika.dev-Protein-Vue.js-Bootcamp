<script setup>
import { ref } from "vue";
import InputFullName from "../Inputs/InputFullName.vue";
import InputMail from "../Inputs/InputMail.vue";
import InputPhone from "../Inputs/InputPhone.vue";
import InputPassword from "../Inputs/InputPassword.vue";

const props = defineProps(["colorTheme"]);
const emit = defineEmits(["register"]);
const registerForm = ref({
  fullName: "",
  phoneNumber: "",
  email: "",
  password: "",
  retryPassword: "",
});

console.log("register", props);
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
  <div
    :class="[props.colorTheme == true ? 'form__card_light' : 'form__card_dark']"
  >
    <h2>REGİSTER</h2>
    <form class="forms" @submit.prevent="submitHandler">
      <InputFullName v-model:name="registerForm.fullName"></InputFullName>
      <InputMail v-model:email="registerForm.email"></InputMail>
      <InputPhone v-model:phoneNumber="registerForm.phoneNumber"></InputPhone>
      <InputPassword v-model:password="registerForm.password"></InputPassword>
      <InputPassword
        v-model:password="registerForm.retryPassword"
      ></InputPassword>
      <button
        :class="[
          props.colorTheme == true ? '__loginbtn_light' : '__loginbtn_dark',
        ]"
        type="submit"
      >
        Register</button
      ><br />
    </form>
    <button
      :class="[
        props.colorTheme == true ? '__registerbtn_light' : '__registerbtn_dark',
      ]"
      @click="goSignin"
    >
      Have account? Sign in
    </button>
  </div>
</template>

<style scoped lang="scss">
.form__card_light {
  background-color: #ececec;
  padding: 15%;
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: Blue;
}
.form__card_dark {
  background-color: rgb(32, 32, 32);
  padding: 15%;
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: white;
}
.form__card > h2 {
  font-size: 50px;
}
.__loginbtn_light {
  background-color: #6066ff;
  color: white;
  margin-top: 5%;
  width: 100%;
}
.__registerbtn_light {
  background-color: #8b54ff;
  color: white;
  margin-top: 5%;
  width: 100%;
  height: 10%;
}
.__loginbtn_dark {
  background-color: white;
  color: black;
  margin-top: 5%;
  width: 100%;
}
.__registerbtn_dark {
  background-color: white;
  color: black;
  margin-top: 5%;
  width: 100%;
  height: 10%;
}
</style>
