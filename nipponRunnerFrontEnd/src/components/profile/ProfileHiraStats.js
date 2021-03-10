import React, { useState } from 'react';
import './profileHiraStats.css'
const {REACT_APP_SERVER_URL} = 

const ProfileHiraStats = (props) => {

    const { handleLogout, user } = props
    const { progress } = user

    console.log(user.progress[0])
    let thisClass = "charBox"
    useEffect({
        changeColor = async() => {
            const response = await axios.get(`{REACT_}`)
        }
    })


    // for( let i = 0; i < user.progress.length; i++ )  {
    //     let thisProgress = user.progress[i].value
    //     if(thisProgress > 10) {
    //         thisClass = "charGold"
    //         console.log(thisProgress)
    //     } else if (thisProgress > 5 && thisProgress  <= 10) {
    //         thisClass = "charSilver"
    //         console.log(thisProgress)
    //     } else if (thisProgress > 0 && thisProgress <= 5) {
    //         thisClass = "charBronze"
    //         console.log(thisProgress)
    //     } else if (thisProgress < 0){
    //         thisClass = "charBad"
    //     }
    // }

    return (
        <div className="hiraStats">
            <div className="hiraChart">
                <div className="hiraChartLeft">
                    <div className="row">
                        <div className={thisClass} id={user.progress[0]}>
                            あ
                        </div>
                        <div className={thisClass} id={user.progress[1]}>
                            い
                        </div>
                        <div className="charBox" id="3">
                            う
                        </div>
                        <div className="charBox" id="4">
                            え
                        </div>
                        <div className="charBox" id="5">
                            お
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="6">
                            か
                        </div>
                        <div className="charBox" id="7">
                            き
                        </div>
                        <div className="charBox" id="8">
                            く
                        </div>
                        <div className="charBox" id="9">
                            け
                        </div>
                        <div className="charBox" id="10">
                            こ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="11">
                            さ
                        </div>
                        <div className="charBox" id="12">
                            し
                        </div>
                        <div className="charBox" id="13">
                            す
                        </div>
                        <div className="charBox" id="14">
                            せ
                        </div>
                        <div className="charBox" id="15">
                            そ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="16">
                            た
                        </div>
                        <div className="charBox" id="17">
                            ち
                        </div>
                        <div className="charBox" id="18">
                            つ
                        </div>
                        <div className="charBox" id="19">
                            て
                        </div>
                        <div className="charBox" id="20">
                            と
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="21">
                            な
                        </div>
                        <div className="charBox" id="22">
                            に
                        </div>
                        <div className="charBox" id="23">
                            ぬ
                        </div>
                        <div className="charBox" id="24">
                            ね
                        </div>
                        <div className="charBox" id="25">
                            の
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="26">
                            は
                        </div>
                        <div className="charBox" id="27">
                            ひ
                        </div>
                        <div className="charBox" id="28">
                            ふ
                        </div>
                        <div className="charBox" id="29">
                            へ
                        </div>
                        <div className="charBox" id="30">
                            ほ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="31">
                            ま
                        </div>
                        <div className="charBox" id="32">
                            み
                        </div>
                        <div className="charBox" id="33">
                            む
                        </div>
                        <div className="charBox" id="34">
                            め
                        </div>
                        <div className="charBox" id="35">
                            も
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="36">
                            や
                        </div>

                        <div className="charBox"></div>

                        <div className="charBox" id="37">
                            ゆ
                        </div>

                        <div className="charBox"></div>

                        <div className="charBox" id="38">
                            よ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="39">
                            ら
                        </div>
                        <div className="charBox" id="40">
                            り
                        </div>
                        <div className="charBox" id="41">
                            る
                        </div>
                        <div className="charBox" id="42">
                            れ
                        </div>
                        <div className="charBox" id="43">
                            ろ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="44">
                            わ
                        </div>

                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        <div className="charBox"></div>

                        <div className="charBox" id="45">
                            を
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        <div className="charBox" id="46">
                            ん
                        </div>
                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        
                    </div>

                    <div className="row">
                        <div className="charBox" id="47">
                            が
                        </div>
                        <div className="charBox" id="48">
                            ぎ
                        </div>
                        <div className="charBox" id="49">
                            ぐ
                        </div>
                        <div className="charBox" id="50">
                            げ
                        </div>
                        <div className="charBox" id="51">
                            ご
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="52">
                            ざ
                        </div>
                        <div className="charBox" id="53">
                            じ
                        </div>
                        <div className="charBox" id="54">
                            ず
                        </div>
                        <div className="charBox" id="55">
                            ぜ
                        </div>
                        <div className="charBox" id="56">
                            ぞ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="57">
                            だ
                        </div>
                        <div className="charBox" id="58">
                            ぢ
                        </div>
                        <div className="charBox" id="59">
                            づ
                        </div>
                        <div className="charBox" id="60">
                            で
                        </div>
                        <div className="charBox" id="61">
                            ど
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="62">
                            ば
                        </div>
                        <div className="charBox" id="63">
                            び
                        </div>
                        <div className="charBox" id="64">
                            ぶ
                        </div>
                        <div className="charBox" id="65">
                            べ
                        </div>
                        <div className="charBox" id="66">
                            ぼ
                        </div>
                    </div>

                    <div className="row">
                        <div className="charBox" id="67">
                            ぱ
                        </div>
                        <div className="charBox" id="68">
                            ぴ
                        </div>
                        <div className="charBox" id="69">
                            ぷ
                        </div>
                        <div className="charBox" id="70">
                            ぺ
                        </div>
                        <div className="charBox" id="71">
                            ぽ
                        </div>
                    </div>
                </div>

                <div className="hiraChartRight">

                    <div className="morphSounds">

                        <div className="row">
                            <div className="charBox" id="72">
                                きゃ
                            </div>
                            <div className="charBox" id="73">
                                きゅ
                            </div>
                            <div className="charBox" id="74">
                                きょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="75">
                                ぎゃ
                            </div>
                            <div className="charBox" id="76">
                                ぎゅ
                            </div>
                            <div className="charBox" id="77">
                                ぎょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="78">
                                しゃ
                            </div>
                            <div className="charBox" id="79">
                                しゅ
                            </div>
                            <div className="charBox" id="80">
                                しょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="81">
                                じゃ
                            </div>
                            <div className="charBox" id="82">
                                じゅ
                            </div>
                            <div className="charBox" id="83">
                                じょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="84">
                                ちゃ
                            </div>
                            <div className="charBox" id="85">
                                ちゅ
                            </div>
                            <div className="charBox" id="86">
                                ちょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="87">
                                にゃ
                            </div>
                            <div className="charBox" id="88">
                                にゅ
                            </div>
                            <div className="charBox" id="89">
                                にょ
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="charBox" id="90">
                                ひゃ
                            </div>
                            <div className="charBox" id="91">
                                ひゅ
                            </div>
                            <div className="charBox" id="92">
                                ひょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="93">
                                びゃ
                            </div>
                            <div className="charBox" id="94">
                                びゅ
                            </div>
                            <div className="charBox" id="95">
                                びょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="96">
                                ぴゃ
                            </div>
                            <div className="charBox" id="97">
                                ぴゅ
                            </div>
                            <div className="charBox" id="98">
                                ぴょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="99">
                                みゃ
                            </div>
                            <div className="charBox" id="100">
                                みゅ
                            </div>
                            <div className="charBox" id="101">
                                みょ
                            </div>
                        </div>

                        <div className="row">
                            <div className="charBox" id="102">
                                りゃ
                            </div>
                            <div className="charBox" id="103">
                                りゅ
                            </div>
                            <div className="charBox" id="104">
                                りょ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHiraStats;