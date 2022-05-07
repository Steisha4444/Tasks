import React from 'react'
import useServerRequest from '../../hooks/useServerRequest';

const GetRequest = () => {

    const get = useServerRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
    })

    function handleGet() {
        if (get)
            console.log(get);
    }
    return (
        <>
            <button className='get__btn' onClick={handleGet}>Get</button>
        </>
    )
}
export default GetRequest;