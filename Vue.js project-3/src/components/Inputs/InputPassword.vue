<script setup>
import { computed } from "vue";
const props = defineProps(["password"]);
const emit = defineEmits(["update:password"]);

const passwordHandler = (event) => {
  emit("update:password", event.target.value);
};
const isValid = computed(() => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(props.password);
});
</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="password"
      password="password"
      :value="password"
      @input="passwordHandler"
      :placeholder="isValid ? '' : 'Password'"
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
