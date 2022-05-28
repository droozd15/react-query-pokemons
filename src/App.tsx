import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { PokemonScreens } from './screens/PokemonScreen/PokemonScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<PokemonScreens />} />
          <Route path="/" element={<PokemonScreens />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
    </QueryClientProvider>
  );
}

export default App;
