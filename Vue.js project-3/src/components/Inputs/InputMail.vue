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
