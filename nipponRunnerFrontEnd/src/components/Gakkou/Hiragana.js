//imports
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const shuffle = require('shuffle-array')

const { REACT_APP_SERVER_URL } = process.env;

const Hiragana = (props) => {
    //declare state variables
    const [allHira, setAllHira] = useState([]);
    //pairingHira will allow boolean logic for matching ji to romaji 

    const [pairingHira, setPairingHira] = useState();
    const [pairingType, setPairingType] = useState();

    //hiraGrouping will be determined by function 5/5 match -> continue to next hiraGrouping
    const [hiraPoints, setHiraPoints] = useState(0);
    const [hiraPage, setHiraPage] = useState(0);
    const [matchedPair, setMatchedPair] = useState({})



    //set up click function to set pairingHira value to key from button, will be used in conditional logic to determine if correct match between romaji and ji
    const handleClick = (incomingHira, incomingType) => {
        //console.log(incomingHira, incomingType)
        if (pairingType && pairingHira) {
            if (pairingType !== incomingType && pairingHira === incomingHira) {
                //condition: correct guess
                //grey out or disable button AND reset pairingHira and pairingType
                //also add point to state for hiraGrouping

                setHiraPoints(hiraPoints + 1);
                setPairingHira(null);
                setPairingType(null);
                setMatchedPair({ ...matchedPair, [incomingHira._id]: incomingHira });
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

    //console.log(matchedPair);


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

    useEffect(() => {
        if (Math.floor(hiraPoints / 5) !== hiraPage) {
            setHiraPage(Math.floor(hiraPoints / 5))
        }

    }, [hiraPoints]);

    //populating divs with .ji and .romaji data 5 hiragana at a time 
    const copyHiras = [
        allHira.slice(0, 5),
        allHira.slice(5, 10),
        allHira.slice(10, 15),
        allHira.slice(15, 20),
        allHira.slice(20, 25),
        allHira.slice(25, 30),
        allHira.slice(30, 35),
        allHira.slice(35, 40),
        allHira.slice(40, 45),
        allHira.slice(45, 50),
        allHira.slice(50, 55),
        allHira.slice(55, 60),
        allHira.slice(60, 65),
        allHira.slice(65, 70),
        allHira.slice(70, 75),
        allHira.slice(75, 80),
        allHira.slice(80, 85),
        allHira.slice(85, 90),
        allHira.slice(90, 95),
        allHira.slice(95, 100),
        allHira.slice(100, 105),
    ]
    //finish creating all slices for hiragana

  
    const hiraListShuffled = shuffle(copyHiras[hiraPage])
    

    const hiraList = hiraListShuffled.map((copyHira) => {

        const hasMatched = matchedPair[copyHira._id]

        return <button
            disabled={hasMatched}
            key={copyHira.ji}
            className={hasMatched ? "disabledButton" : "hiragana"}
            onClick={() => handleClick(copyHira, "ji")}>
            {copyHira.ji}</button>
    }
    );
    
    const romajiListShuffled = shuffle(copyHiras[hiraPage])

    const romajiList = romajiListShuffled.map((copyHira) => {

        const hasMatched = matchedPair[copyHira._id]
       

        return <button
            disabled={hasMatched}
            key={copyHira.romaji}
            className={hasMatched ? "disabledButton" : "hiragana"}
            onClick={() => handleClick(copyHira, "romaji")}>
            {copyHira.romaji}</button>
    }
    )


    return (

        <div className="hiraContainer">
            <div> Match the hiragana character to its sound</div>
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
