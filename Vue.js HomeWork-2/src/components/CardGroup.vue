<script setup>
import { ref } from "vue";
import StudentList from "./StudentList.vue";
import { getStudents } from "../service/service.data";

const groupProps = defineProps(["groupName"]);
const students = ref();

// Card'lara tıklanınca çalışacak fonksiyonumuz.
// getStudents fonksiyonumuza burada tıklanan group ismini gönderiyoruz ve onu students referansına eşitliyoruz.
const selectGroup = async (group) => {
	const selectedStudents = await getStudents(group);
	students.value = selectedStudents;
};
</script>

<template>
	<div class="content">
	 <!-- group isimlerini v-for ile cardlara aktardık. -->
		<div class="cards" v-for="groups in groupProps.groupName" :key="groups">
			<div @click="selectGroup(groups)">
				<div class="group">
					<h2 class="card__title">{{ groups }}</h2>
				</div>
			</div>
		</div>
	</div>

	<!-- Çektiğimiz öğrencileri studentList componentine defineProps ile gönderiyoruz. -->
	<StudentList :group="students"></StudentList>
</template>

<style scoped>
.content {
	display: flex;
	justify-content: center;
}
.cards {
	width: 200px;
	height: 100px;
	background-color: white;
	color: black;
	border-radius: 4px;
	padding: 20px;
	margin-left: 25px;
	margin-right: 25px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.1s;
}
.group {
	text-align: center;
	padding: 10px;
}
.content :hover {
	transform: scale(1.1);
}
</style>
