<script setup>
import { computed } from "vue";
const props = defineProps(["email"]);
const emit = defineEmits(["update:email"]);

const emailHandler = (event) => {
  emit("update:email", event.target.value);
};
const isValid = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email);
});

</script>

<template>
  <div class="form__wrapper">   
    <input
      class="form__input"
      type="email"
      name="email"
      id="email"
      :value="email"
      @input="emailHandler"
      :placeholder="isValid ? '' : 'email@email.com'"
    />
  </div>
</template>

<style scoped lang="scss">
  .form__input{
    width: auto;
    border-radius: 10px;
    font-size: 25px;
    background-color: white;
    margin-top: 10px;
    border-color: #6066ff;
    border: 2px solid #6066ff;
    padding: 10px;
  }
  </style>