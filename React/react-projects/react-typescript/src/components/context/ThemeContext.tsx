import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = createContext(theme)

export default function ThemeContext({children}:ThemeContextProps) {
  return (
    <ThemeContextProvider.Provider value={theme}>
      {children}
    </ThemeContextProvider.Provider>
  )
}   
