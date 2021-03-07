import React from 'react'
import { NavLink, Link } from 'react-router-dom';
const Navbar = (props) => {
    console.log(`>>>> inside Navbar component`)
    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/">Gakkou</Link>
                {/* <button className="navToggle" type="button" data-toggle="collapse" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation"> */}
                    {/* <span className="navTogglerIcon"></span>
                </button> */}
                <div className="navbarActual">
                    
                        <p className="navHomeLink">
                            <NavLink exact to="/">Home</NavLink>
                        </p>
                        <p className="navAboutLink">
                            <NavLink to="/about">About</NavLink>
                        </p>
                        {props.isAuth ?
                        <>
                        <p className="navProfileLink">
                            <NavLink to="/profile">Profile</NavLink>
                        </p>
                        <p className="navLogoutLink">
                            <span onClick={props.handleLogout}>Logout</span>
                        </p>
                        </>
                        :
                        <>
                        <p className="navSignupLink">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </p>
                        <p className="navLoginLink">
                            <NavLink to="/login">Login</NavLink>
                        </p>
                        </>
                    }
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
