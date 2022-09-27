<script setup>
import {ref,onMounted,computed} from "vue"
import { getAllChar } from "../services/service";
import CardComp from "./CardComp.vue";


const data =ref([]);
const pageNumberr = ref(1);

onMounted(async () => {
  const response =await  getAllChar(1);
  data.value = response;
})



const  setPageHandler = async (name) =>{
  pageNumberr.value=pageNumberr.value+name;
  const response =await  getAllChar(pageNumberr.value);
  data.value = response;
  
}  

computed(() => {
  return pageNumberr.value
})




</script>



<template>
  <div class="flex flex-col items-center my-5">
    <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Page : {{pageNumberr}}</button>
  </div>
  <CardComp :result="data" @pageNumber="setPageHandler"></CardComp> 
</template>

<style scoped>

</style>
