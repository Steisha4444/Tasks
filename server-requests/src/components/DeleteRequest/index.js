import React from 'react'
import useServerRequest from '../../hooks/useServerRequest';

const DeleteRequest = () => {

    const remove = useServerRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'DELETE',
    })

    function handleDelete() {
        if (remove)
            console.log(remove);
    }
    return (
        <>
            <button className='delete__btn' onClick={handleDelete}>Delete</button>
        </>
    )
}
export default DeleteRequest;
