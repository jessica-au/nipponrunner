import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHiraStats from './ProfileHiraStats'
import './profile.css'

const Profile = (props) => {
    console.log(`>>>> inside Profile component`)
    const { handleLogout, user } = props
    const { username, experience, progress, exp } = user
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
        <p>Experience (けいけん) | {experience}</p>
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

            <Link to="/gakkou">
                <button type="button" className="profileGakkouButton">
                    がっこう
                </button>
            </Link>
            
            <Link to="/profile/stats">
                <button type="button" className="profileStatsButton">
                    View Progress (能力) 
                </button>
            </Link>
        </div>
    )
}

export default Profile;