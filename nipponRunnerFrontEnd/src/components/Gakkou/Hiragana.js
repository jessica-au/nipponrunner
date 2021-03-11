//imports
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const { REACT_APP_SERVER_URL } = process.env;

const Hiragana = (props) => {
    //declare state variables
    const [allHira, setAllHira] = useState([]);
    //pairingHira will allow boolean logic for matching ji to romaji 
    // set as bango to allow updating user ..stuff
    const [pairingHira, setPairingHira] = useState();
    const [pairingType, setPairingType] = useState();
    
    //hiraGrouping will be determined by function 5/5 match -> continue to next hiraGrouping
    const [hiraPoints, setHiraPoints] = useState(0);
    const [matchedPair, setMatchedPair] = useState({})

    //set up click function to set pairingHira value to key from button, will be used in boolean to determine if correct match between romaji and ji
    const handleClick = (incomingHira, incomingType) => {
        //console.log(incomingHira, incomingType)
        if (pairingType && pairingHira) {
            if (pairingType !== incomingType && pairingHira === incomingHira) {
                //condition: correct guess
                //grey out or disable button AND reset pairingHira/Type
                //also add point to state for hiraGrouping
                setHiraPoints(hiraPoints +1);
                setPairingHira(null);
                setPairingType(null);
                setMatchedPair({...matchedPair, [incomingHira._id]: incomingHira});
                console.log('matched')
            } else if (pairingType == incomingType) {
                //condition: new button of same type clicked
                //set pairings to new state using new incoming values
                setPairingHira(incomingHira)
                console.log('switched to new initial guess')
            } else if (pairingType !== incomingType && pairingHira !== incomingHira) {
                // minus a point from user (leo's stats page)
                //reset the pairingHira and pairingType
                setPairingHira(null);
                setPairingType(null);
                console.log('incorrect match')
            }

        } else {
            setPairingHira(incomingHira);
            setPairingType(incomingType);
            //console.log('this is pairing: ', incomingHira)
        }
    }

console.log(matchedPair);

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
    //console.log(copyHiras)
    const hiraList = copyHiras.map((copyHira) =>
        <button disabled={matchedPair[copyHira._id]} key={copyHira.ji}  className="hiragana" onClick={() => handleClick(copyHira, "ji")}>{copyHira.ji}</button>
    );

    const romajiList = copyHiras.map((copyHira) =>
        <button disabled={matchedPair[copyHira._id]} key={copyHira.romaji} className="hiragana" onClick={() => handleClick(copyHira, "romaji")}>{copyHira.romaji}</button>
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
