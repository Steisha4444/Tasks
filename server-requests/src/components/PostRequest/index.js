import React from 'react'
import useServerRequest from '../../hooks/useServerRequest'


function PostRequest() {
    const post = useServerRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    })

    function handlePost() {
        if (post)
            console.log(post);
    }
    return (
        <>
            <button className='post__btn' onClick={handlePost}> Post</button>
        </>
    )
}

export default PostRequest;