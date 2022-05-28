import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';

export default function Count() {
  const queryPokemon = usePokemon();
  return <h3>You are looking at {queryPokemon.data?.length} pokemons</h3>;
}
