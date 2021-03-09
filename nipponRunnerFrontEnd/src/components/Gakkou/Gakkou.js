import React from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;


const Gakkou = (props) => {
  // const hira= axios.get(`${REACT_APP_SERVER_URL}/${req.body.bango}`);
  
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