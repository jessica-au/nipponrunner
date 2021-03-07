import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(`>>>> inside Profile component`)
    const { handleLogout, user } = props
    const { id, username, age, daysLogged, correctAns, incorrectAns, email, exp } = user
    const expirationTime = new Date(exp * 1000)
    let currentTime = Date.now()

    if(currentTime >= expirationTime){
        handleLogout()
        alert('session had ended. please login to continue')
    }

    const userData = user ?
    (<div>
        <h1> Profile </h1>
        <p>Username: {username}</p>
        <p>Experience: {daysLogged}</p>
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