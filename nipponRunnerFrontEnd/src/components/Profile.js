import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHiraStats from './ProfileHiraStats'

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
    (<div className="information">
        <h1> Profile (プロフィール) </h1>
        <p>Username (なまえ) | {username}</p>
        <p>Experience (けいけん) | {daysLogged}</p>
        <p>Proficiency (のうりょく) | {{correctAns} - {incorrectAns}}</p>
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
            <div className="profileInfo">
                {user ? userData : errorDiv()}
            </div>

            <Link to="/">
                <button type="button" className="profileHomeButton">
                    Home
                </button>
            </Link>

            <Link to="/">
                <button type="button" className="profileGakkouButton">
                    がっこう
                </button>
            </Link>

            <ProfileHiraStats/>
        </div>
    )
}

export default Profile;