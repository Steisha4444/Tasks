import React from 'react'
import useServerRequest from '../../hooks/useServerRequest';

const PutRequest = () => {

    const put = useServerRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        data: {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    })

    function handlePut() {
        if (put)
            console.log(put);
    }

    return (
        <>
            <button className='put__btn' onClick={handlePut}>Put</button>
        </>
    )
}
export default PutRequest;
