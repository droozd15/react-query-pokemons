import PokemonSearch from './components/PokemonSearch';
import React, { useState } from 'react';
import './PokemonScreen.css';

export default function PokemonScreen() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [pokemon, setPokemon] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPokemon(pokemonInput);
  };

  return (
    <div className="Pokemon">
      <h3>Pokemons</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="pokemon" value={pokemonInput} onChange={(e) => setPokemonInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <PokemonSearch pokemon={pokemon} />
    </div>
  );
}
