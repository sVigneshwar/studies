import { useState } from 'react';
export default function  App(){
    const [color, setColor] = useState('black')

    function getColor(newColor){
        setColor(newColor)
    }

    return(
        <div>
            <span style={{
                height: 50,
                width: 50,
                display: 'block',
                background: color
            }}>
            </span>
            <CallBack getColor={getColor} />
        </div>
    )
}

function CallBack({getColor}){

    function handleChange(e){
        getColor(e.target.value)
    }

    return(
        <input type="text" onChange={handleChange} />
    )
}