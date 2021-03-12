import StatBox from './StatBox'
import React, { useState, useEffect } from 'react';
import './profileHiraStats.css'
import axios from 'axios'
const {REACT_APP_SERVER_URL} = process.env

const ProfileHiraStats = (props) => {

    const { handleLogout, user } = props

    const [allHira, setAllHira] = useState([])

    useEffect(() => {
        const fetchHira = async (req, res) => {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/hira/allHira`)
            const data = await response.data
            setAllHira(data)
        }
        fetchHira();

    }, [])

    let hiraArray;

    if(props.user.progress && allHira){
        hiraArray = allHira.map((item, index) => {
            if(props.user.progress[index] !== undefined){
            return <StatBox key={index} item={item} progress={props.user.progress[index]}/>
            } else {
                return <div className="charBox">{item.ji}</div>
            }
        })
    }

    return (
        <div className="hiraStats">
            <div className="hiraChart">
                <div className="hiraChartLeft">
                    <div className="row">
                        {hiraArray[0]}
                        {hiraArray[1]}
                        {hiraArray[2]}
                        {hiraArray[3]}
                        {hiraArray[4]}
                    </div>

                    <div className="row">
                        {hiraArray[5]}
                        {hiraArray[6]}
                        {hiraArray[7]}
                        {hiraArray[8]}
                        {hiraArray[9]}
                    </div>

                    <div className="row">
                        {hiraArray[10]}
                        {hiraArray[11]}
                        {hiraArray[12]}
                        {hiraArray[13]}
                        {hiraArray[14]}
                    </div>

                    <div className="row">
                        {hiraArray[15]}
                        {hiraArray[16]}
                        {hiraArray[17]}
                        {hiraArray[18]}
                        {hiraArray[19]}
                    </div>

                    <div className="row">
                        {hiraArray[20]}
                        {hiraArray[21]}
                        {hiraArray[22]}
                        {hiraArray[23]}
                        {hiraArray[24]}
                    </div>

                    <div className="row">
                        {hiraArray[25]}
                        {hiraArray[26]}
                        {hiraArray[27]}
                        {hiraArray[28]}
                        {hiraArray[29]}
                    </div>

                    <div className="row">
                        {hiraArray[30]}
                        {hiraArray[31]}
                        {hiraArray[32]}
                        {hiraArray[33]}
                        {hiraArray[34]}
                    </div>

                    <div className="row">
                        {hiraArray[35]}
                        {hiraArray[36]}
                        {hiraArray[37]}
                        {hiraArray[38]}
                        {hiraArray[39]}
                    </div>

                    <div className="row">
                        {hiraArray[40]}
                        {hiraArray[41]}
                        {hiraArray[42]}
                        {hiraArray[43]}
                        {hiraArray[44]}
                    </div>

                    <div className="row">
                        {hiraArray[45]}
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        {hiraArray[46]}
                    </div>

                    <div className="row">
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        {hiraArray[47]}
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        
                    </div>

                    <div className="row">
                        {hiraArray[48]}
                        {hiraArray[49]}
                        {hiraArray[50]}
                        {hiraArray[51]}
                        {hiraArray[52]}
                    </div>

                    <div className="row">
                        {hiraArray[53]}
                        {hiraArray[54]}
                        {hiraArray[55]}
                        {hiraArray[56]}
                        {hiraArray[57]}
                    </div>

                    <div className="row">
                        {hiraArray[58]}
                        {hiraArray[59]}
                        {hiraArray[60]}
                        {hiraArray[61]}
                        {hiraArray[62]}
                    </div>

                    <div className="row">
                        {hiraArray[63]}
                        {hiraArray[64]}
                        {hiraArray[65]}
                        {hiraArray[66]}
                        {hiraArray[67]}
                    </div>

                    <div className="row">
                        {hiraArray[68]}
                        {hiraArray[69]}
                        {hiraArray[70]}
                        {hiraArray[71]}
                        {hiraArray[72]}
                    </div>
                </div>

                <div className="hiraChartRight">

                    <div className="morphSounds">

                        <div className="row">
                            {hiraArray[73]}
                            {hiraArray[74]}
                            {hiraArray[75]}
                        </div>

                        <div className="row">
                            {hiraArray[76]}
                            {hiraArray[77]}
                            {hiraArray[78]}
                        </div>

                        <div className="row">
                            {hiraArray[79]}
                            {hiraArray[80]}
                            {hiraArray[81]}
                        </div>

                        <div className="row">
                            {hiraArray[82]}
                            {hiraArray[83]}
                            {hiraArray[84]}
                        </div>

                        <div className="row">
                            {hiraArray[85]}
                            {hiraArray[86]}
                            {hiraArray[87]}
                        </div>

                        <div className="row">
                            {hiraArray[88]}
                            {hiraArray[89]}
                            {hiraArray[90]}
                        </div>
                        
                        <div className="row">
                            {hiraArray[91]}
                            {hiraArray[92]}
                            {hiraArray[93]}
                        </div>

                        <div className="row">
                            {hiraArray[94]}
                            {hiraArray[95]}
                            {hiraArray[96]}
                        </div>

                        <div className="row">
                            {hiraArray[97]}
                            {hiraArray[98]}
                            {hiraArray[99]}
                        </div>

                        <div className="row">
                            {hiraArray[100]}
                            {hiraArray[101]}
                            {hiraArray[102]}
                        </div>

                        <div className="row">
                            {hiraArray[103]}
                            {hiraArray[104]}
                            {hiraArray[105]}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProfileHiraStats;