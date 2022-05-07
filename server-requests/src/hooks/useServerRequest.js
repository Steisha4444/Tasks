import React, { useEffect, useState } from 'react'



function useServerRequest({ method, data = {}, url }) {
    const [response, setResponse] = useState(null);
    let params = {
        method: method,
        headers: {"Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'Content-type': 'application/json; charset=UTF-8',}
    };

    if (method !== 'GET') {
        params = { ...params, body: JSON.stringify(data) }
    }

    useEffect(() => {
        fetch(
            url,
            params,
        )
            .then(response => response.json())
            .then(json => setResponse(json))
         
    });
    return response;
}

export default useServerRequest;
