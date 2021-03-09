//imports
import React from 'react';
import ReactDOM from 'react-dom';


//functions
//function for clicking hira divs
function Square(props) {
    return (
        <button className="hiraBox" onClick={props.onClick}>click
        </button>
    );
}



const Hiragana = (props) => {
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
            </div>
            <div className="hiraRow">

                <div className="hiragana">
                    え
            </div>
                <div className="hiragana">
                    お
             </div>

            </div>
        </div>
    );
}

export default Hiragana;
