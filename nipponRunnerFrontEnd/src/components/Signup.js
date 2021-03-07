import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const Signup  = () => {
    console.log(`>>> inside Singup component`)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleUsername = (e) => {
        console.log(`>>>> inside handleUsername func`)
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        console.log(`>>>> inside handleEmail func`)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(`>>>> inside handlePassword func`)
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        console.log(`>>>> inside handleConfirmPassword func`)
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(`>>>> inside handleSubmit func`)
        if(password === confirmPassword && password.length >= 8){
            const newUser = { username, email, password }
            axios.post(`${REACT_APP_SERVER_URL}/users/register`, newUser)
            .then(response => {
                console.log(`>>>> new user created`)
                console.log(response)
                setRedirect(true)
            })
            .catch(error => console.log(`>>>> singup error: ${error}`))
        } else {
            if(password !== confirmPassword) {
                alert('passwords dont\'t match')
            } else if (password.length <= 7){
                alert('password must be at least 8 characters long')
            }
        }
    }
    if(redirect) return <Redirect to="/login/"/>

    return (
        <div className="signupComponent">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="signupFormUsername">
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" value={username} onChange={handleUsername} />
                </div>
                <div className="signupFormEmail">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail} />
                </div>
                <div className="signupFormPassword">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} />
                </div>
                <div className="signupFormConfirmPassword">
                    <label htmlFor="confirmPassword">confirm password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} />
                </div>
                <button type="submit" className="signupFormSubmit">submit</button>
            </form>
        </div>
    )
}

export default Signup;