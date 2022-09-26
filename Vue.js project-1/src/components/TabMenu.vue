<script setup>
import {ref,onMounted,computed} from "vue"
import { getAllChar } from "../services/service";
import CardComp from "./CardComp.vue"

const allChar=ref([]);



async function getAllCharHandler() {
  computed(async () => {
  const result =await getAllChar();
  allChar.value = result;
  console.log("merhaba");
})
}

</script>



<template>
  <ul
    class="py-5 px-10 m-10 mt-10 hidden text-xl teal-500 font-small text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
  >
    <li class="w-full" @click="getAllCharHandler">
      <a
        href="#"
        class="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
        aria-current="page"
        >All Characters</a
      >
    </li>
    <li class="w-full">
      <a
        href="#"
        class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >Locations</a
      >
    </li>

    <li class="w-full">
      <a
        href="#"
        class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >Episodes</a
      >
    </li>
  </ul>

  <CardComp :char="allChar" />
</template>

<style scoped>

</style>
