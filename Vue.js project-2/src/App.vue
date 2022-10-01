<script setup>
import { onMounted, ref } from "vue";
import { fetchData,fetchFilterCharacter } from "./services/data";
import Card from "./components/Card/Card.vue";
import Input from "./components/Input/Input.vue";

const data = ref([]);

onMounted(async () => {
  const getData = await fetchData();
  data.value = getData;
});

async function filterCharacter(name) {
  const getFilterData =await fetchFilterCharacter(name);
  data.value = getFilterData;
  console.log("App-emitsname",name);
}

</script>

<template>
 
  Vue.js project-2
  <Input @filterChar="filterCharacter"></Input>
  <Card :character="data"></Card>
</template>

<style scoped></style>
