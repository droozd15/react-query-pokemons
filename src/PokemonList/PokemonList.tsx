import { useQuery } from 'react-query';
import React from 'react';
import { getPokemons } from '../api';

export default function PokemonList() {
  const queryPokemon = useQuery('pokemon', () => getPokemons);
  console.log(queryPokemon);
  return (
    <div>
      {queryPokemon.isLoading
        ? 'Loading...'
        : queryPokemon.isError
        ? 'Something went wrong'
        : queryPokemon?.data?.map((pokemon: any) => {
            return <div key={pokemon.name}>{pokemon.name}</div>;
          })}
    </div>
  );
}
