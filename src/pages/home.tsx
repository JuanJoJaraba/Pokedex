
import React, { useState, useEffect } from 'react';
import "@/app/css/home.css"

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
      <div >
      <h1>Pokédex</h1>
        {pokemons.map(pokemon => (
          <div  key={pokemon.name}>
            
              <p>Nombre: {pokemon.name} </p><p>Id: {pokemon.id} </p> <br />
              <button></button>
              
          </div>
        ))}
      </div>
    </div> 
      
  );
}

export default Home;