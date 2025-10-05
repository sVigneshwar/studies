import React, { useState, useMemo, useEffect, useCallback } from 'react'
import List from './2'

export default function CounterAndTheme2() {
    const [number, setNumber] = useState(1)
    const [theme, setTheme] = useState("dark")

    const getNumber = useCallback((callbackValue) =>{
        return [number+callbackValue, number+1+callbackValue, number+2+callbackValue]
    }, [number])

    const themeStyle = {
        backgroundColor: theme === "dark" ? "#000" : "#ddd",
        color: theme === "dark" ? "#ddd" : "#000",
    }

  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /><br/>
    <div style={themeStyle}>
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change theme</button>
    <List getNumber={getNumber} />
    </div>
    </>
  )
}
