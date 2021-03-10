import React from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;


//axios.get(`${REACT_APP_SERVER_URL}/${req.body.bango}`);


const Gakkou = (props) => {
  
    return (
        <div className="gakkou">
            <h1>Okaeri! Welcome!</h1>
            
            <div className="information">
            <Link to="/gakkou/hiragana">
                <button type="button" className="hiraButton">
                   Learn Hiragana
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Gakkou;