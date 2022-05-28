import { useQuery } from 'react-query';
import { getPokemons } from '../api';

export const usePokemon = () => {
  return useQuery(
    'pokemons',
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return getPokemons;
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 5000,
    },
  );
};
