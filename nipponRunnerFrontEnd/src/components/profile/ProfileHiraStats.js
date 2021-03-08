import React from 'react';
import './profileHiraStats.css'

const ProfileHiraStats = (props) => {

    return (
        <div className="hiraStats">
            <div className="hiraChart">
                <div className="hiraChartLeft">

                    <div className="row">
                        <div className="vowelSoundsA">
                            あ
                        </div>
                        <div className="vowelSoundsI">
                            い
                        </div>
                        <div className="vowelSoundsU">
                            う
                        </div>
                        <div className="vowelSoundsE">
                            え
                        </div>
                        <div className="vowelSoundsO">
                            お
                        </div>
                    </div>

                    <div className="row">
                        <div className="kSoundsA">
                            か
                        </div>
                        <div className="kSoundsI">
                            き
                        </div>
                        <div className="kSoundsU">
                            く
                        </div>
                        <div className="kSoundsE">
                            け
                        </div>
                        <div className="kSoundsO">
                            こ
                        </div>
                    </div>

                    <div className="row">
                        <div className="sSoundsA">
                            さ
                        </div>
                        <div className="sSoundsI">
                            し
                        </div>
                        <div className="sSoundsU">
                            す
                        </div>
                        <div className="sSoundsE">
                            せ
                        </div>
                        <div className="sSoundsO">
                            そ
                        </div>
                    </div>

                    <div className="row">
                        <div className="tSoundsA">
                            た
                        </div>
                        <div className="tSoundsI">
                            ち
                        </div>
                        <div className="tSoundsU">
                            つ
                        </div>
                        <div className="tSoundsE">
                            て
                        </div>
                        <div className="tSoundsO">
                            と
                        </div>
                    </div>

                    <div className="row">
                        <div className="nSoundsA">
                            な
                        </div>
                        <div className="nSoundsI">
                            に
                        </div>
                        <div className="nSoundsU">
                            ぬ
                        </div>
                        <div className="nSoundsE">
                            ね
                        </div>
                        <div className="nSoundsO">
                            の
                        </div>
                    </div>

                    <div className="row">
                        <div className="hSoundsA">
                            は
                        </div>
                        <div className="hSoundsI">
                            ひ
                        </div>
                        <div className="hSoundsU">
                            ふ
                        </div>
                        <div className="hSoundsE">
                            へ
                        </div>
                        <div className="hSoundsO">
                            ほ
                        </div>
                    </div>

                    <div className="row">
                        <div className="mSoundsA">
                            ま
                        </div>
                        <div className="mSoundsI">
                            み
                        </div>
                        <div className="mSoundsU">
                            む
                        </div>
                        <div className="mSoundsE">
                            め
                        </div>
                        <div className="mSoundsO">
                            も
                        </div>
                    </div>

                    <div className="row">
                        <div className="ySoundsA">
                            や
                        </div>

                        <div className="charBox"></div>

                        <div className="ySoundsU">
                            ゆ
                        </div>

                        <div className="charBox"></div>

                        <div className="ySoundsO">
                            よ
                        </div>
                    </div>

                    <div className="row">
                        <div className="rSoundsA">
                            ら
                        </div>
                        <div className="rSoundsI">
                            り
                        </div>
                        <div className="rSoundsU">
                            る
                        </div>
                        <div className="rSoundsE">
                            れ
                        </div>
                        <div className="rSoundsO">
                            ろ
                        </div>
                    </div>

                    <div className="row">
                        <div className="wSoundsA">
                            わ
                        </div>

                        <div className="charBox"></div>
                        <div className="charBox"></div>
                        <div className="charBox"></div>

                        <div className="wSoundsO">
                            を
                        </div>
                    </div>

                    <div className="nCharacter">
                        ん
                    </div>

                    <div className="gSounds">
                        がぎぐげご
                    </div>

                    <div className="zSounds">
                        ざじずぜぞ
                    </div>

                    <div className="dSounds">
                        だぢづでど
                    </div>

                    <div className="bSounds">
                        ばびぶべぼ
                    </div>

                    <div className="pSounds">
                        ぱぴぷぺぽ
                    </div>
                </div>
                <div className="hiraChartRight">
                    <div className="morphSounds">

                        <div className="morphSoundsKy">
                            きゃ
                            きゅ
                            きょ
                        </div>

                        <div className="morphSoundsGy">
                            ぎゃ
                            ぎゅ
                            ぎょ
                        </div>

                        <div className="morphSoundsSh">
                            しゃ
                            しゅ
                            しょ
                        </div>

                        <div className="morphSoundsJ">
                            じゃ
                            じゅ
                            じょ
                        </div>

                        <div className="morphSoundsCh">
                            ちゃ
                            ちゅ
                            ちょ
                        </div>

                        <div className="morphSoundsNy">
                            にゃ
                            にゅ
                            にょ
                        </div>
                        
                        <div className="morphSoundsHy">
                            ひゃ
                            ひゅ
                            ひょ
                        </div>

                        <div className="morphSoundsBy">
                            びゃ
                            びゅ
                            びょ
                        </div>

                        <div className="morphSoundsMy">
                            みゃ
                            みゅ
                            みょ
                        </div>

                        <div className="morphSoundsPy">
                            ぴゃ
                            ぴゅ
                            ぴょ
                        </div>

                        <div className="morphSoundsRy">
                            りゃ
                            りょ
                            りょ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHiraStats;