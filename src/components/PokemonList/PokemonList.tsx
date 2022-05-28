import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';

export default function PokemonList() {
  const queryPokemon = usePokemon();
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
