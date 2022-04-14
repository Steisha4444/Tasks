import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const history = useNavigate();

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <ul>
      {posts.map((post) => {
        return (

          <li
            className='list'
            key={post.id}
            style={{ cursor: 'pointer' }}
            onClick={() => history(`/posts/${post.id}`, { state: post })}
          >
            {post.title}
          </li>

        )
      })}
    </ul>
  );
};
