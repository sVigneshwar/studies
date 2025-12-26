import { useState } from "react"

export default function LoggedIn() {
    const [loggedIn, setLoggedIn] = useState(false)
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
  return (
    <div>
      <button onClick={handleLogin} disabled={loggedIn}>Login</button>
      <button onClick={handleLogout} disabled={!loggedIn}>Logout</button>
      <p>User is {loggedIn ? "Logged in" : "Logged out"}</p>
    </div>
  )
}