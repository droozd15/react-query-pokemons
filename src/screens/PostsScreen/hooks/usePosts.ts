import { useQuery } from 'react-query';
import { getPosts, getUser } from '../api';

export const usePosts = (id: number) =>
  useQuery(['posts', id], () => getPosts(id), {
    enabled: !!id,
  });
