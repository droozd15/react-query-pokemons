import { useQuery } from 'react-query';
import { getUser } from '../api';

export const useUser = (email: string) => useQuery(['user', email], () => getUser(email));
