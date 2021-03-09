//imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


//functions
//function for clicking hira divs
// function Square(props) {
//     return (
//         <button className="hiraBox" onClick={props.onClick}>click
//         </button>
//     );
// }



const Hiragana = () => {

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
