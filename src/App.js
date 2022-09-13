import { useState } from 'react';
import './App.css';
import { getInfo } from './services/apiFetch';

function App() {
  const numberOfPokemon = 1000;
  const handleClick = () => {
    getInfo(numberOfPokemon).then((res) => setPokemon(res?.results))
  }
  const [pokemon, setPokemon] = useState([]);
  return (
    <div>
      <header>
        Testing React 18
      </header>
      <button onClick={handleClick}>Click to fetch pokemon</button>
      <ul>
        {pokemon && pokemon.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
