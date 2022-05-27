import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonList from './PokemonList';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PokemonList />
        <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
