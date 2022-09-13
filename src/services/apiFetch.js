export const getInfo = (limit = 100) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
    .then(res => res.json());
}
