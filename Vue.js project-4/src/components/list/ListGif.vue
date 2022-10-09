<script setup>
import { ref } from "vue";
import SearchComponent from '../search/SearchComponent.vue';
import { getGif  } from "../../services/getGIF";
const searchName = ref([]);
const imgUrl = ref("");

async function submitHandler() {
  const result = await getGif(searchName.value);
  console.log(result.data[0].images.original.webp);
  imgUrl.value = result.data[0].images.original.webp;
}


</script>

<template>
    <Teleport to="#modal">
        <div class="modal" >
            <img :src="imgUrl" />
         </div>
    </Teleport>
  
  <form class="forms" @submit.prevent="submitHandler">
    <SearchComponent  v-model:name ="searchName" />
    <button type="submit">Gönder</button>
  </form>

</template>

<style scoped>

</style>

