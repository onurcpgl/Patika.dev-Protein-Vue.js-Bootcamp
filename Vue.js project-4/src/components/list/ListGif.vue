<script setup>
import { ref } from "vue";
import SearchComponent from "../search/SearchComponent.vue";
import { getGif } from "../../services/getGIF";
const searchName = ref([]);
const imgUrl = ref("");
const isShow = ref(false);

async function submitHandler() {
  const result = await getGif(searchName.value);
  imgUrl.value = result.data[0].images.original.webp;
  isShow.value = true;
}
const closeHandler = () => {
  isShow.value = false;
};
</script>

<template>
  <Teleport to="#modal">
    <div class="modal" v-show="isShow">
      <img :src="imgUrl" @click="closeHandler" />
    </div>
  </Teleport>
  <div v-show="!isShow">
    <form class="forms" @submit.prevent="submitHandler">
      <SearchComponent v-model:name="searchName" />
      <button type="submit">Gönder</button>
    </form>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 39%;
}
</style>
