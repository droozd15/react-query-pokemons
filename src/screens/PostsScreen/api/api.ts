import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getUser = (email: string) => axiosInstance.get(`/users?email=${email}`).then((res) => res.data[0]);

export const getPosts = (id: number) =>
  axiosInstance.get(`/posts?userId=${id}`).then((res) => {
    return res.data;
  });
