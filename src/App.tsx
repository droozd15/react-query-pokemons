import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

const queryClient = new QueryClient();

function App() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [pokemon, setPokemon] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPokemon(pokemonInput);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="pokemon" value={pokemonInput} onChange={(e) => setPokemonInput(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <PokemonSearch pokemon={pokemon} />
      </div>

      <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
    </QueryClientProvider>
  );
}

export default App;
