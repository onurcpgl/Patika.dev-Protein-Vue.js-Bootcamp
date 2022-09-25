// Api'dan gelen tüm verileri almak için çalışan fonksiyon.
export async function getAllData() {
	const result = await fetch(
		"https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/d6f881aec77f15a4107eafc10f6a91e90f9268a4/homework%201/data.json"
	)
		.then((response) => response.json())
		.then((data) => data);

	return result;
}

// Api'dan sadece group isimlerini almak için çalışan fonksiyon.
export async function getAllGroup() {
	// Burada tekrar'dan fetch işlemi yapmamak için getAllData fonksiyonunu çağırıp değerini data değişkenine atadık.
	const data = await getAllData();
	// Sadece group isimlerini alabilmek için her bir öğrencinin group adını aldık.
	const groupName = data.map((student) => student.group);
	const uniqueGroups = [...new Set(groupName)]; // Group isimlerini diziye bir kere yazmak için kullandık.
	return uniqueGroups;
}

// Butona tıklandıkdan sonra gelen group ismine göre değer döndüren fonksiyonumuz.
export async function getStudents(groupName) {
	const data = await getAllData();
	// Burada öğrencinin gurubu gelen gurub'a eşit'se filtrele diyoruz.
	// Daha sonra map ile sadece o guruba ait öğrencinin adını ve type değerini alıyoruz.
	const dataFilter = data.filter((student) => student.group == groupName);
	const dataMap = dataFilter.map((student) => {
		return { name: student.name, type: student.type };
	});
	console.log(dataMap);
	return dataMap;
}
