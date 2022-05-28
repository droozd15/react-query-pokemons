import { useQuery } from 'react-query';
import { getPokemon } from '../api';

export const usePokemon = (pokemon: string) => {
  return useQuery(
    ['pokemon', pokemon],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return getPokemon(pokemon);
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 5000,
      enabled: !!pokemon,
    },
  );
};
