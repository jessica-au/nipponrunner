import React from 'react'
import { NavLink, Link } from 'react-router-dom';
const Navbar = (props) => {
    console.log(`>>>> inside Navbar component`)
    return (
        <nav className="navbar">
            <div className="navHomeLink">
                <NavLink exact to="/">Home</NavLink>
            </div>

            <div className="navGakkouLink">
                <NavLink to="/gakkou">Gakkou</NavLink>
            </div>

            <div className="navAboutLink">
                <NavLink to="/about">About</NavLink>
            </div>
            {
                props.isAuth ?
                    <>
                        <div className="navProfileLink">
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                        <div className="navLogoutLink">
                            <span onClick={props.handleLogout}>Logout</span>
                        </div>
                    </>
                    :
                    <>
                        <div className="navSignupLink">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </div>
                        <div className="navLoginLink">
                            <NavLink to="/login">Login</NavLink>
                        </div>
                    </>
            }

        </nav>
    )
}

export default Navbar
