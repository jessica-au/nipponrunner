//imports 
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

const { REACT_APP_SERVER_URL } = process.env;

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        console.log(`>>>> inside handleEmail func`)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(`>>>> inside handlePassword func`)
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(`>>>> inside handleSubmit func`)
        e.preventDefault()
        const userData = {email, password}

        axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
        .then(response => {
            console.log(`>>>>inside handleSubmit reponse block`)

            console.log(response)
            const { token } = response.data
            //save token to localStorage
            localStorage.setItem('jwtToken', token)
            //set token to header
            setAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            props.nowCurrentUser(decoded)
        })
        .catch(error => {
            console.log(`>>>> error logging in ${error}`)
            alert('incorrect email or password! please try again')
        })
    }

    if(props.user) return <Redirect to="/profile" /> //redirects user to profile if log in authentication passed

    return(
        <div className="loginPage">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="loginContainer">
                    <div className="emailInput">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" value={email} onChange={handleEmail} />
                    </div>
                    <div className="passwordInput">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" value={password} onChange={handlePassword} />
                    </div>
                    <button className="loginFormSubmit">login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;