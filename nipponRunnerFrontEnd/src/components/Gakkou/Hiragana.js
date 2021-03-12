//imports
import React, { useEffect, useState, useMemo } from 'react';
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

    //pulling in user from header
    const [userProgress, setUserProgress] = useState([])

    const updateCorrect = (incomingHira) => {
        let thisHira = incomingHira.bango - 1
        if(userProgress && userProgress[thisHira]){
            userProgress[thisHira].value = userProgress[thisHira].value + 1
        } else {
            const newProg = {
                id: incomingHira.bango,
                value: 1
            }
            if(userProgress){ 
                userProgress.push(newProg)
            } else {
                setUserProgress(newProg)
            }
        }
        console.log(`updated progress: ${userProgress}`)
    }

    const updateIncorrect = (incomingHira) => {
        let thisHira = incomingHira.bango - 1
        if(userProgress !== undefined && userProgress[thisHira] !== undefined && incomingHira.bango == userProgress[thisHira].id){
            userProgress[thisHira].value = userProgress[thisHira].value - 1
        } else {
            const newProg = {
                id: incomingHira.bango,
                value: 1
            }
            if(userProgress){ 
                userProgress.push(newProg)
            } else {
                setUserProgress(newProg)
            }
        }
        
        
        console.log(`updated progress: ${userProgress}`)
    }

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
                updateCorrect(incomingHira)
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
                updateIncorrect(incomingHira)
                console.log('incorrect match')
            }

        } else {
            setPairingHira(incomingHira);
            setPairingType(incomingType);
            //console.log('this is pairing: ', incomingHira)
        }
    }
    //console.log(matchedPair);
    console.log(userProgress)

    useEffect(()=>{
        setUserProgress(props.user.progress)
    }, [])

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

    useEffect(() => {
        const sendUpdate = async() => {
            console.log(userProgress)
            await axios.put(`${REACT_APP_SERVER_URL}/users/update`)
        }
        sendUpdate()
    }, [hiraPoints]);

    //populating divs with .ji and .romaji data 5 hiragana at a time 
    const shuffledHirasArrayOne = useMemo(() => [
        shuffle(allHira.slice(0, 5)),
        shuffle(allHira.slice(5, 10)),
        shuffle(allHira.slice(10, 15)),
        shuffle(allHira.slice(15, 20)),
        shuffle(allHira.slice(20, 25)),
        shuffle(allHira.slice(25, 30)),
        shuffle(allHira.slice(30, 35)),
        shuffle(allHira.slice(35, 40)),
        shuffle(allHira.slice(40, 45)),
        shuffle(allHira.slice(45, 50)),
        shuffle(allHira.slice(50, 55)),
        shuffle(allHira.slice(55, 60)),
        shuffle(allHira.slice(60, 65)),
        shuffle(allHira.slice(65, 70)),
        shuffle(allHira.slice(70, 75)),
        shuffle(allHira.slice(75, 80)),
        shuffle(allHira.slice(80, 85)),
        shuffle(allHira.slice(85, 90)),
        shuffle(allHira.slice(90, 95)),
        shuffle(allHira.slice(95, 100)),
        shuffle(allHira.slice(100, 105)),
    ], [allHira])

    const shuffledHirasArrayTwo = useMemo(()=>[
        shuffle(allHira.slice(0, 5)),
        shuffle(allHira.slice(5, 10)),
        shuffle(allHira.slice(10, 15)),
        shuffle(allHira.slice(15, 20)),
        shuffle(allHira.slice(20, 25)),
        shuffle(allHira.slice(25, 30)),
        shuffle(allHira.slice(30, 35)),
        shuffle(allHira.slice(35, 40)),
        shuffle(allHira.slice(40, 45)),
        shuffle(allHira.slice(45, 50)),
        shuffle(allHira.slice(50, 55)),
        shuffle(allHira.slice(55, 60)),
        shuffle(allHira.slice(60, 65)),
        shuffle(allHira.slice(65, 70)),
        shuffle(allHira.slice(70, 75)),
        shuffle(allHira.slice(75, 80)),
        shuffle(allHira.slice(80, 85)),
        shuffle(allHira.slice(85, 90)),
        shuffle(allHira.slice(90, 95)),
        shuffle(allHira.slice(95, 100)),
        shuffle(allHira.slice(100, 105)),
    ], [allHira])
    //finish creating all slices for hiragana

    
    //hiralist is the hirasArray array mapped through at the value of hirapage, which corresponds to the index of the hirasArray array
    const hiraList = shuffledHirasArrayOne[hiraPage].map((copyHira) => {
        // hasMatched looks at the matchedPair state at the index of that copyHira instance's id
        // if there is a key/value in the matchedPair state object, disable the button for that hiragana. otherwise keep it enabled
        const hasMatched = matchedPair[copyHira._id];

        return <button
            disabled={hasMatched}
            key={copyHira.ji}
            className={hasMatched ? "disabledButton" : "hiragana"}
            onClick={() => handleClick(copyHira, "ji")}>
            {copyHira.ji}</button>
    }
    );

    const romajiList = shuffledHirasArrayTwo[hiraPage].map((copyHira) => {

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
