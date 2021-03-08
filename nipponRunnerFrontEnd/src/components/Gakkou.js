import React from 'react';
import { Link } from 'react-router-dom';

const Gakkou = (props) => {
    console.log(`>>>> inside Gakkou component`)
    const { handleLogout, user } = props
    const { id, username, age, daysLogged, correctAns, incorrectAns, email, exp } = user
    const expirationTime = new Date(exp * 1000)
    let currentTime = Date.now()

    if(currentTime >= expirationTime){
        handleLogout()
        alert('Session had ended. Please log in to continue')
    }

    const userData = user ?
    (<div className="information">
        <h1> Gakkou </h1>
        <p>Okaeri, {username}!</p>
        <p>Begin Hiragana</p>
        <p>Progress Bar: {correctAns} - {incorrectAns}</p>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="profileError">
                <h3> Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        )
    }

    return (
        <div className="profilePage">
            {user ? userData : errorDiv()}
        </div>
    )
}

export default Profile;