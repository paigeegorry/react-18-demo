import { useEffect, useRef, useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import { getInfo } from './services/apiFetch';

const filterPokemon = (filterTerm) => {
  const pokemon = getInfo();
  if(filterTerm === '') return pokemon
  let newPokemonArr = pokemon;
  newPokemonArr = newPokemonArr.filter((poke) => poke.name.includes(filterTerm));
  return newPokemonArr
}

function App() {
  const [filterTerm, setFilterTerm] = useState('');
  const [filterInTimeout, setFilterInTimeout] = useState('');
  const filterTermRef = useRef(filterTerm);
  
  const filteredPokemon = filterPokemon(filterInTimeout);
  
  useEffect(() => {
    filterTermRef.current = filterTerm;
    setTimeout(() => {
      setFilterInTimeout(filterTermRef.current)
    }, 2500)
  }, [filterTerm])

  const handleChange = ({target}) => {
    setFilterTerm(target.value);
  }

  return (
    <div>
      <header>
        Testing React 18
      </header>
      <br/>
      <input type="text" value={filterTerm} onChange={handleChange}placeholder="Filter by name (i.e. Pikachu, Bulbasaur...)" />
      <PokemonList pokemon={filteredPokemon} />
    </div>
  );
}

export default App;
