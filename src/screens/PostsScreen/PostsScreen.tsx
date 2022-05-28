import { useQuery } from 'react-query';
import axios from 'axios';

const email = 'Sincere@april.biz';
const URL = 'http://jsonplaceholder.typicode.com';

export default function PostsScreen() {
  const userQuery = useQuery('user', () => axios.get(`${URL}/users?email=${email}`).then((res) => res.data[0]));
  const userPostsQuery = useQuery(
    'posts',
    () => axios.get(`${URL}/posts?userId=${userQuery.data.id}`).then((res) => res.data),
    { enabled: !!userQuery.data?.id },
  );

  console.log(userPostsQuery.data?.length);
  return (
    <>
      <h3>Dependent Queries</h3>
      {userQuery.isLoading ? 'Loading user...' : <div>User Id: {userQuery?.data?.id}</div>}
      <br />
      {userPostsQuery.isIdle ? null : userPostsQuery.isLoading ? (
        'Loading posts'
      ) : (
        <div>Post count {userPostsQuery.data?.length}</div>
      )}
    </>
  );
}
