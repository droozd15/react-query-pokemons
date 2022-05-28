import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PokemonScreen from './screens/PokemonScreen';
import PostsScreen from './screens/PostsScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<PokemonScreen />} />
          <Route path="/posts" element={<PostsScreen />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtoolsPanel setIsOpen={() => true} handleDragStart={() => true} />
    </QueryClientProvider>
  );
}

export default App;
