import React from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';



const Gakkou = (props) => {
  
    return (
        <div className="gakkou">
            <h1>Okaeri! Welcome!</h1>
            <div className="information">
            <Link to="/gakkou/hiragana">
                <button type="button" className="hiraButton">
                    Hiragana
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Gakkou;