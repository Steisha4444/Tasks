import React from 'react';
import { Navigate } from 'react-router-dom';


export const LoginPage = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) {
        <Navigate to='/posts' />
    }

    const handleTapLogin = (e) => {
        if (e.target.username.value === "" || e.target.password.value === "") {

            alert("Password or username field is empty");
        }
        else {

            onLogin();
        }
    }
    
    return (
        <div className='login'>
            <h3>Login</h3>
            <form className='login-form' onSubmit={handleTapLogin}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="login" />
            </form>

        </div>
    )
}
