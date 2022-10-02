<script setup>
import { computed } from "vue";
const props = defineProps(["phoneNumber"]);
const emit = defineEmits(["update:phoneNumber"]);

const phoneNumberHandler = (event) => {
  emit("update:phoneNumber", event.target.value);
};
const isValid = computed(() => {
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(props.phoneNumber);
});
</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="phoneNumber"
      phoneNumber="phoneNumber"
      id="phoneNumber"
      :value="phoneNumber"
      @input="phoneNumberHandler"
      :placeholder="isValid ? '' : '530XXXXXXX'"
    />
  </div>
</template>
