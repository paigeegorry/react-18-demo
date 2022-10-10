import pokemonArray from './pokemon.json'; 

export const getInfo = () => {
  return [...pokemonArray, ...pokemonArray, ...pokemonArray];
}
