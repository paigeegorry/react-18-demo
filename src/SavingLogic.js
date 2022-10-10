import { useEffect, useRef, useState, useTransition } from 'react';
import './App.css';
import PokemonList from './ProductList';
import filterPokemon from './utils/filterPokemon';

function App() {
  const [isPending, startTransition] = useTransition();
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
    startTransition(() => {
      setFilterTerm(target.value);
    })
  }

  return (
    <div>
      <header>
        Testing React 18
      </header>
      <br/>
      <input type="text" value={filterInTimeout} onChange={handleChange}placeholder="Filter by name (i.e. Pikachu, Bulbasaur...)" />
      <PokemonList pokemon={filteredPokemon} />
    </div>
  );
}

export default App;
