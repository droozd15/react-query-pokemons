import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonList from './PokemonList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PokemonList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
