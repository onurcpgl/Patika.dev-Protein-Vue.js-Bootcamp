<script setup>
import { ref, onMounted } from "vue";
import { getAllGroup } from "./service/service.data.js";

import CardGroup from "./components/CardGroup.vue";
import StudentList from "./components/StudentList.vue";

const groupsName = ref("Orchid");
// Component açıldığı anda aşağıdaki mount çalışır.
// onMounted içinde tüm verileri çekip bir ref'e atadık ve props ile CardGroup componentine group isimlerini gönderdik.
onMounted(async () => {
	const getGroups = await getAllGroup();
	groupsName.value = getGroups;
});
</script>

<template>
	<CardGroup :groupName="groupsName"></CardGroup>
	<StudentList></StudentList>
</template>

<style scoped></style>
