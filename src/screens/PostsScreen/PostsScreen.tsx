import { useQuery } from 'react-query';
import axios from 'axios';
import { useUser } from './hooks/useUser';
import { usePosts } from './hooks/usePosts';

const email = 'Sincere@april.biz';
const URL = 'http://jsonplaceholder.typicode.com';

export default function PostsScreen() {
  const userQuery = useUser(email);
  const userPostsQuery = usePosts(userQuery.data?.id);

  console.log(userPostsQuery.data?.length);
  return (
    <>
      <h3>Dependent Queries</h3>
      {userQuery.isLoading ? 'Loading user...' : <div>User Id: {userQuery?.data?.id}</div>}
      <br />
      {userPostsQuery.isIdle ? null : userPostsQuery.isLoading ? (
        'Loading posts'
      ) : (
        <>
          <div>Post count {userPostsQuery.data?.length}</div>
          <div>
            {userPostsQuery.data?.map((post: any) => {
              return (
                <div key={post.id}>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
