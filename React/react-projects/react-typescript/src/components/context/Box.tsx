import { useContext, useState } from "react"
import { ThemeContextProvider } from "./ThemeContext"

export default function Box() {
  const theme = useContext(ThemeContextProvider)
  const [themeColor, setThemeColor] = useState(theme.primary)

  const setPrimary = () => {
    setThemeColor(theme.primary)
    // console.log(themeColor);
  }
  const setSecondary = () => {
    setThemeColor(theme.secondary)
    // console.log(themeColor);
    
  }
  return (
    <div style={{background: themeColor.background, color: themeColor.color}}>
      Theme checker box

      <button onClick={setPrimary}>set primary</button>
      <button onClick={setSecondary}>set secondary</button>
    </div>
  )
}
