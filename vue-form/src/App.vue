<script setup>
import { ref } from "vue";
import InputText from "./components/Input/InputText.vue";
import InputMail from "./components/Input/InputMail.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const reemail = ref("");


async function submitHandler() {
  console.log("çalıştı");
    const result =await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'POST',
      body: JSON.stringify(
        {
          name: firstName.value,
          lastname : lastName.value,
          email: email.value
        }
      )
    }).then(res => console.log(res))
    return result;
}
</script>

<template>
  Firstname: {{ firstName }} <br/>
  Lastname: {{lastName}}<br/> 
  Email: {{email}} <br/>
  Reemail: {{reemail}} <br/>
  <hr />
  <form class="forms" @submit.prevent="submitHandler">
    <InputText v-model:name="firstName" label="First Name"></InputText>
    <InputText v-model:name ="lastName" label="Last Name"></InputText>
    <InputMail v-model:email="email" label="Email"></InputMail>
    <InputMail v-model:email="reemail" label="Reemail"></InputMail>
    <button type="submit">Gönder</button>
  </form>

</template>

<style scoped lang="scss">

</style>
