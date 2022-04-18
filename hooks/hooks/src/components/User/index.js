import React, { useCallback, useEffect, useState } from 'react'

export const User = (userId) => {

    const [user, setUser] = useState(1);

    const getUserData = useCallback(() => {
        console.log(userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId.userId}`)
            .then(response => response.json())
            .then((json) => {
                setUser(json)
            });
    }, [userId]);


    useEffect(() => {
        getUserData(userId)
    }
        , [getUserData, userId]);

    if (user) {

        return (
            <div className='user'>
                <p>ID {user.id}</p>
                <p>Name {user.name}</p>
                <p>Username {user.username}</p>
                <p>Email {user.email}</p>
            </div>

        )
    }
    else return "User is loading"
}
