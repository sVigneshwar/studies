import { provideThemeToggle } from './usecontext-main'

export default function UseContextButton() {
    const toggleTheme = provideThemeToggle()
  return (
    <>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}
