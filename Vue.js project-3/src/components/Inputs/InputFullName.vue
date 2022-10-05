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
