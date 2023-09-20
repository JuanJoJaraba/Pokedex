
import React, { useState, useEffect } from 'react';
import '@/app/css/home.css';

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: { name: string }[];
}

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data =>
        setPokemons(
          data.results.map((pokemon: Pokemon, index: number) => ({
            ...pokemon,
            id: index + 1,
          }))
        )
      );
  }, []);

  return (
    <div className='container'>
       <h1 className='title'>Pokédex</h1>
      <div className='grid'>
        {pokemons.map(pokemon => (
          <div key={pokemon.name} className='card'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <p>Nombre: {pokemon.name}</p>
            <p>ID: {pokemon.id}</p>
            <p>Detail Pokemon:</p>
            <a href={pokemon.url}>Detail</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
