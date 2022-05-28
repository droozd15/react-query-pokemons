import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';

type PokemonSearchProps = {
  pokemon: any;
};

export default function PokemonSearch({ pokemon }: PokemonSearchProps) {
  const queryPokemon = usePokemon(pokemon);

  console.log(pokemon, queryPokemon);
  return pokemon ? (
    <div>
      {queryPokemon.isLoading ? (
        'Loading...'
      ) : queryPokemon.isError ? (
        'Something went wrong'
      ) : (
        <img src={queryPokemon.data.sprites.front_default} alt={pokemon} />
      )}

      {queryPokemon.isFetching ? 'Updating...' : null}
    </div>
  ) : (
    <div>No pokemon</div>
  );
}
