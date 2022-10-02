<script setup>
import { computed } from "vue";
const props = defineProps(["name"]);
const emit = defineEmits(["update:name"]);

const nameHandler = (event) => {
  emit("update:name", event.target.value);
  
};
const isValid = computed(() => {
  return /^[a-z,',-]+(\s)[a-z,',-]+$/i.test(props.name);
});

</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="name"
      name="name"
      id="name"
      :value="name"
      @input="nameHandler"
      :placeholder="isValid ? '' : 'Full Name'"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
