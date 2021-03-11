import React from 'react';

const About = () => {
    console.log(`>>>> inside About component`)
    return (
        <div className="information">
            <h1>About Page</h1>
            <h3>Rendering about page</h3>
            <p>At NipponRunner, we provide you with an engaging way to learn your hiragana and master the basics to begin your journey learning the Japanese language smoothly. </p>
        </div>
    )
}

export default About;