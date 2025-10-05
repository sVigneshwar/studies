import React, { useContext } from 'react'
import {useTheme, useUpdateTheme} from './themecontext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useUpdateTheme()
    const themeStyle = {
        backgroundColor: darkTheme ? "#000" : "#ddd",
        color: darkTheme ? "#ddd" : "#000",
        padding: "2em",
        margin: "2em"
    }
  return (
    <>
    <button onClick={toggleTheme}>Toggle</button>
    <div style={themeStyle}>       
        <p>Funcion Theme</p>
    </div>
    </>
  )
}
