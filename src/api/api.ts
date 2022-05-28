import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPokemons = axiosInstance.get('/pokemon').then((res) => res.data.results);

export const getPokemon = (pokemon: string) =>
  axiosInstance.get(`/pokemon/${pokemon}`).then((res) => {
    return res.data;
  });
