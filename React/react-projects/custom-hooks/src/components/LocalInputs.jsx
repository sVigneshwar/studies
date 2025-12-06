import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default function LocalInputs() {

    const [name, setName] = useLocalStorage("name", "")
    const [theme, setTheme] = useLocalStorage("theme", "light")

  return (
    <>
    <div>
        <input id="light" type="radio" name="theme" value="light" checked={theme === "light"} onChange={(e) => setTheme(e.target.value)} />
        <label htmlFor="light">Light</label>
        <input id="dark" type="radio" name="theme" value="dark" checked={theme === "dark"} onChange={(e) => setTheme(e.target.value)} />
        <label htmlFor='dark'>Dark</label>
    </div>
    <br />
    <div>
        <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
    </div>
    </>
  )
}
