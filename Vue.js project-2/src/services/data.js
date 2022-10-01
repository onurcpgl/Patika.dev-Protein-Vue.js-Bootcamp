export async function fetchData(){
    const response = await fetch("https://raw.githubusercontent.com/onurcpgl/Patika.dev-Protein-Vue.js-Bootcamp/main/Data/rick_and_morty.json")
        .then(person => person.json())
            .then(data => data.results)
    return response;
}

export async function fetchFilterCharacter(name){
    const data =await fetchData();
    const filterData = data.filter(function (x) {
        return x.name.toLowerCase().includes(name);
    })
    return filterData;
}
