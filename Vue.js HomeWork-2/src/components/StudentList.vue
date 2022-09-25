<script setup>
const studentsProps = defineProps(["group"]);
</script>

<template>
	<!-- Öğrencileri burada v-for ile tek tek ekrana yazdırdık. -->
	<div class="content" v-for="student in studentsProps.group">
		<ul class="table">
			<!-- Burada v-if ile öğrencinin type değeri asistan ise asistan öğrencileri bu li altında listelemek. -->
			<li class="assistant" v-if="student.type == 'assistant'">
				<div>{{ student.name }}</div>
			</li>
			<!-- Burada ise v-if ile öğrencinin type değeri null olan öğrencileri burada listelemek. -->
			<li class="student" v-else="student.type == null">
				<div>{{ student.name }}</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
body {
	font-family: "lato", sans-serif;
}

.table {
	width: 90%;
	list-style-type: none;
	display: flex;
	justify-content: center;
}

.student {
	background-color: aliceblue;
	width: 60%;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.assistant {
	background-color: orange;
	width: 60%;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
