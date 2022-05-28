import React from 'react';
import { usePokemons } from '../../hooks/usePokemons';

export default function Count() {
  const queryPokemon = usePokemons();
  return <h3>You are looking at {queryPokemon.data?.length} pokemons</h3>;
}
