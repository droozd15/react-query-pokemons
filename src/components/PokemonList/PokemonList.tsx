import React from 'react';
import { usePokemons } from '../../hooks/usePokemons';

export default function PokemonList() {
  const queryPokemon = usePokemons();
  return (
    <div>
      {queryPokemon.isLoading
        ? 'Loading...'
        : queryPokemon.isError
        ? 'Something went wrong'
        : queryPokemon.data?.map((pokemon: any) => {
            return <div key={pokemon.name}>{pokemon.name}</div>;
          })}

      {queryPokemon.isFetching ? 'Updating...' : null}
    </div>
  );
}
