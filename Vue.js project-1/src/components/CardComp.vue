<script setup>
import { getAllChar } from "../services/service";
import { computed, onMounted, ref } from "vue";
const props = defineProps(["char"]);

computed(() => {
  console.log("computed", props);
});
const allChar = ref([]);
onMounted(async () => {
  const data = await getAllChar();
  allChar.value = data;
});
console.log(allChar);
</script>

<template>
  <div class="grid grid-cols-3 gap-3 container mx-auto px-10 py-5">
    <div v-for="char in props" >
      <a
        href="#"
        class="block p-10 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <img v-bind:src="char.image" class="rounded-lg border" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ char.name }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ char.location.name }}
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
