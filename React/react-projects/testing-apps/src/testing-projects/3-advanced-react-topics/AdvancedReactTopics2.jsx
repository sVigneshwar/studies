import React, { useEffect, useMemo, useState } from 'react'

export default function AdvancedReactTopics2() {

    var [number, setNumber] = useState(1)
    var [dark, setDark] = useState(false)

    var double = useMemo(()=>{
        return doubleFunction(number);
    }, [number])

    

    function doubleFunction(val){
        for(var i=0;i <1000000000;i++){}
        return val*2;
    }

    useEffect(()=>{
        console.log("double function called")
    }, [number])

  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
    <button onClick={() => setDark(!dark)}>Toggle</button>
    <div style={{
        backgroundColor: dark ? "#000" : "#ddd",
        color: dark ? "#ddd" : "#000",
    }}>
        <p>Current number is {number}</p>
        <p>computed number is {double}</p>
    </div>
    </>
  )
}
