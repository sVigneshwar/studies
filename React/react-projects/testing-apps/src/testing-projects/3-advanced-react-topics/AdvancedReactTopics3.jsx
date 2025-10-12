import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function AdvancedReactTopics3() {

    var [number, setNumber] = useState(1)
    var [dark, setDark] = useState(false)
    
    const getNumber =useCallback((callbackValue)=>{
        return [number+callbackValue, number*2+callbackValue, number*3+callbackValue]
    }, [number])
  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark(!dark)}>Toggle</button>
    <div style={{backgroundColor: dark ? "#000" : "#ddd",color: dark ? "#ddd" : "#000"}}>
        <List getNumber={getNumber} />
    </div>
   
    </>
  )
}

function List({getNumber}){
    const [list, setList] = useState([]);

    useEffect(()=>{
        console.log("numbers updated")
        setList(getNumber(10))
    }, [getNumber])

    return(
        <ul>
            {list.map(val => {
                return (<li key={val}>{val}</li>)
            })}
        </ul>
    )
}