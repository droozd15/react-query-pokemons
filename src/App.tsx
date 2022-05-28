import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

const queryClient = new QueryClient();

function App() {
  const [pokemon, setPokemon] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <input name="pokemon" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
        <PokemonSearch pokemon={pokemon} />
      </div>

      <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
    </QueryClientProvider>
  );
}

export default App;
