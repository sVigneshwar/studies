import React, { useContext, useState } from 'react'

const UseContextTheme = React.createContext()
const UseContextThemeToggle = React.createContext()

export function provideTheme(){
    return useContext(UseContextTheme)
}
export function provideThemeToggle(){
    return useContext(UseContextThemeToggle)
}

export default function UseContextMain({children}) {
    const [theme, setTheme] = useState("dark")
    function toggleTheme(){
        setTheme(theme === "dark" ? "light" : "dark");
    }
  return (
    <UseContextTheme.Provider value={theme}>
        <UseContextThemeToggle.Provider value={toggleTheme}>
            {children}
        </UseContextThemeToggle.Provider>
    </UseContextTheme.Provider>
  )
}
