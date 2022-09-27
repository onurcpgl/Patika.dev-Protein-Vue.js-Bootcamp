export async function  getAllChar(page) {
    const response= await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
        .then(data => data.results)
    return response;
}