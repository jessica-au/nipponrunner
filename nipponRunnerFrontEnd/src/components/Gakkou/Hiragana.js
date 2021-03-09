//imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const { REACT_APP_SERVER_URL } = process.env;



//functions
//function for clicking hira divs
// function Square(props) {
//     return (
//         <button className="hiraBox" onClick={props.onClick}>click
//         </button>
//     );
// }



const Hiragana = () => {
const [ allHira, setAllHira ] = useState([]);

useEffect(() => {
    const fetchHira = async(req, res) => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/hira/allHira`)
        console.log(response)
        const data = await response.data
        // console.log('data:', data)
        setAllHira(data)
    }
    fetchHira();
    // console.log({allHira})

}, []);

    return (
        
        <div className="hiraContainer">
            <div className="hiraRow">
                <div className="hiragana">
                    あ
            </div>
                <div className="hiragana">
                    い
            </div>
                <div className="hiragana">
                    う
            </div>
                <div className="hiragana">
                    え
            </div>
                <div className="hiragana">
                    お
             </div>
            </div>
            {/* <div className="hiraRow">
                <div className="hiragana">
                    a
            </div>
                <div className="hiragana">
                    i
            </div>
                <div className="hiragana">
                    u
            </div>
                <div className="hiragana">
                    e
            </div>
                <div className="hiragana">
                    o
             </div>
             </div> */}
        </div>
    );
}

export default Hiragana;
