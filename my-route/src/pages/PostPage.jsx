import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const PostPage = () => {

    const { state: post } = useLocation();
    const history = useNavigate();

    return (
        <>
            {post && (
                <div className='container'>

                    <h3 style={{ color: 'black' }}>{post.title}</h3>
                    <p>{post.body}</p>
                    <button
                        className='btn-back'
                        onClick={() => history('/posts')}
                    >
                        All Posts
                    </button>

                </div>
            )}
        </>
    );
};


