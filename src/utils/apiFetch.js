import pokemonArray from './mocks/pokemon.json'; 

export const getInfo = () => {
  return [...pokemonArray, ...pokemonArray, ...pokemonArray];
}
