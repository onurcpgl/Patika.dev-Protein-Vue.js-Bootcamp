export async function  getAllChar() {
    const response= await fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
        .then(data => data.results)
    return response;
}