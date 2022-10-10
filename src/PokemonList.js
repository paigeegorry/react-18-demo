export default function PokemonList({pokemon = []}) {
  return (
    <ul>
        {pokemon.map((character, idx) => (
          <li key={`${idx}-${character.name}`}>{character.name}</li>
        ))
        }
      </ul>
  )
}
