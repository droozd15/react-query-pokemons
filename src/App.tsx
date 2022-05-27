import React from 'react';
import axios from 'axios';
import './App.css';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Pokemons/>
      </div>
    </QueryClientProvider>
  );
}

function Pokemons() {
  const queryPokemon = useQuery('pokemon', () => axios.get('https://pokeapi.co/api/v2/pokemon').then(res => res.data.results))
  console.log(queryPokemon)
  return <div>
    {queryPokemon?.data?.map((pokemon: any) => {
      return <div key={pokemon.name}>{pokemon.name}</div>
    })}
  </div>
}

export default App;
