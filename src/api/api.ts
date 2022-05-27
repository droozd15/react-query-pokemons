import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPokemons = axiosInstance.get('https://pokeapi.co/api/v2/pokemon').then((res) => res.data.results);
