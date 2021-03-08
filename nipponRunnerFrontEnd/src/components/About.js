import React from 'react';

const About = () => {
    console.log(`>>>> inside About component`)
    return (
        <div className="information">
            <h1>About Page</h1>
            <h3>Rendering about page</h3>
            <p>Possible to use this as a welcome/landing page for application as 
                it is currently tied in to be viewed regardless of user or nonuser</p>
        </div>
    )
}

export default About;