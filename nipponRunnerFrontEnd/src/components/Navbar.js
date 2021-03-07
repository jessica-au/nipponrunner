import React from 'react'
import { NavLink, Link } from 'react-router-dom';
const Navbar = (props) => {
    console.log(`>>>> inside Navbar component`)
    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/">nippon runner</Link>
                <button className="navToggle" type="button" data-toggle="collapse" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navTogglerIcon"></span>
                </button>
                <div className="navbarActual">
                    <ul>
                        <li className="navHomeLink">
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li className="navAboutLink">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        {props.isAuth ?
                        <>
                        <li className="navProfileLink">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li className="navLogoutLink">
                            <span onClick={props.handleLogout}>Logout</span>
                        </li>
                        </>
                        :
                        <>
                        <li className="navSignupLink">
                            <NavLink to="/signup">Sign Up!</NavLink>
                        </li>
                        <li className="navLoginLink">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        </>
                    }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
