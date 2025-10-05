import React, { useState, useMemo, useEffect } from 'react'

export default function CounterAndTheme() {
    const [number, setNumber] = useState(1)
    const [theme, setTheme] = useState("dark")
    const doubleNumber = useMemo(()=>{
        return double(number)
    }, [number])

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: theme === "dark" ? "#000" : "#ddd",
            color: theme === "dark" ? "#ddd" : "#000",
        }
    }, [theme])

    useEffect(() =>{
        console.log("themeChanged")
    }, [themeStyle])

    function double(val){
        console.log("double number")
        for(var i = 0; i<100000000; i++){}
        return val * 2;
    }
  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(e.target.value)} /><br/>
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change theme</button>
    <p style={themeStyle}>{doubleNumber}</p>
    </>
  )
}
