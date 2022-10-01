<script setup>
const props = defineProps(["character"]);
console.log("Card-props",props.character);
</script>

<template>
  <div class="grid grid-cols-4 gap-4 container mx-auto px-10 py-5">
    <div v-for="char in props.character">
      <a
        href="#"
        class="block p-10 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-200 dark:border-gray-100 dark:hover:bg-gray-700"
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
