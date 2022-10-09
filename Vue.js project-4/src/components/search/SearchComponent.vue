<script setup>
const props = defineProps(["name","label"]);
const emit = defineEmits(["update:name"]);

const nameHandler = (event) => {
  emit("update:name", event.target.value);
};

</script>
<template>
  
    <div class="form__wrapper">
      <input
        class="form__input"
        type="text"
        name="name"
        id="name"
        :value="name"
        placeholder="Buraya isim yazınız."
        @input="nameHandler"
      />
    </div>
  
</template>