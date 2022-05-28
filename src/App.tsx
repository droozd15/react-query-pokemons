import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import PokemonList from './components/PokemonList';
import Count from './components/Count';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Count />
        <PokemonList />
        <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
