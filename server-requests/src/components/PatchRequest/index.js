import React from 'react'
import useServerRequest from '../../hooks/useServerRequest';

const PatchRequest = () => {

    const patch = useServerRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PATCH',
        data: {
            title: 'foo',
        }

    })

    function handlePatch() {
        if (patch)
            console.log(patch);
    }
    return (
        <>
            <button className='patch__btn' onClick={handlePatch}>Patch</button>
        </>
    )
}
export default PatchRequest;
