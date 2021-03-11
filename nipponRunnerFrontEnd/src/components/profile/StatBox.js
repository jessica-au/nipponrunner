import React from 'react'

function StatBox(props) {
    
    const {key, item, progress} = props
    let color = "charBox"

    if(!progress){
        return null
    } else {
        let val = progress.value
        if(val > 10){
        color = "charGold"  
        } else if (val <= 10 && val > 5) {
            color = "charSilver"
        } else if (val <= 5 && val > 0) {
            color = "charBronze"
        } else if (val < 0){
            color = "charBad"
        }
    }

    return (
        <div className={color} key={key}>
            {item.ji}
        </div>
    )
}

export default StatBox
