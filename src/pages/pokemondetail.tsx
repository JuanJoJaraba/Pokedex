import React, { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: { name: string }[];
  stats: { name: string; base_stat: number }[];
  abilities: { name: string }[];
  sprites: { front_default: string };
}

function PokemonDetail({ match }: any) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [match.params.id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Types: {pokemon.types.map(type => type.name).join(', ')}</p>
      <p>Stats:</p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.name}>
            {stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <p>Abilities: {pokemon.abilities.map(ability => ability.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;