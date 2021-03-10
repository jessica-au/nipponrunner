//imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const { REACT_APP_SERVER_URL } = process.env;

const Hiragana = (props) => {
    //declare state variables
    const [allHira, setAllHira] = useState([]);
    //pairingHira will allow boolean logic for matching ji to romaji
    const [pairingHira, setPairingHira] = useState();
    //hiraGrouping will be determined by function 5/5 match -> continue to next hiraGrouping
    const [hiraGrouping, setHiraGrouping] = useState();
    //
    const [pairingType, setPairingType] = useState();

    //set up click function to set pairingHira value to e.target.value, will be used in boolean to determine if correct match between romaji and ji
    const handleClick = ( incomingHira, incomingType) => {
        if (pairingType && pairingHira) {
//make sure to check three conditionals: ji & romaji correct, ji & romaji incorrect, and same type
        } else {
            setPairingHira(incomingHira);
            setPairingType(incomingType);
            console.log('this is pairing: ', incomingHira)
        }
    }


    useEffect(() => {
        const fetchHira = async (req, res) => {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/hira/allHira`)
            console.log(response)
            const data = await response.data
            // console.log('data:', data)
            setAllHira(data)
        }
        fetchHira();
        // console.log(allHira[0])

    }, []);
    //populating divs with .ji and .romaji data 5 hiragana at a time 
    const copyHiras = allHira.slice(0, 5);
    console.log(copyHiras)
    const hiraList = copyHiras.map((copyHira) =>
        <button key={copyHira.ji} className="hiragana" onClick={() => handleClick(copyHira, "ji")}>{copyHira.ji}</button>
    );

    const romajiList = copyHiras.map((copyHira) =>
        <button key={copyHira.romaji} className="hiragana" onClick={() => handleClick(copyHira, "romaji")}>{copyHira.romaji}</button>
    );



    return (

        <div className="hiraContainer">
            <div className="hiraRow">
                {hiraList}
            </div>
            <div className="hiraRow">
                {romajiList}
            </div>
        </div>
    );
}

export default Hiragana;
