import { provideTheme } from './usecontext-main'

export default function UseContextContent() {
    const theme = provideTheme()
  return (
    <>
        <p style={{backgroundColor: theme === "dark" ? "#000" : "#ddd", color: "green", padding: "2rem" }}>lorem ipsum</p>
    </>
  )
}
