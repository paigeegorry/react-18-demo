import { getInfo } from "./apiFetch";

export default function filterPokemon(filterTerm) {
  const pokemon = getInfo();
  if(filterTerm === '') return pokemon
  let newPokemonArr = pokemon;
  newPokemonArr = newPokemonArr.filter((poke) => poke.name.includes(filterTerm));
  return newPokemonArr
}
