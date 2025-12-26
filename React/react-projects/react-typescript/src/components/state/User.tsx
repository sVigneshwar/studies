import { useState } from "react"

type Authuser = {
    name: string
    email: string
}

export default function User() {
    const [user, setUser] = useState<Authuser | null>(null)
    const handleLogin = () => {
        setUser({
            name: "vicky",
            email: "vicky@test.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>Username is {user?.name}</p>
      <p>Useremail is {user?.email}</p>
    </div>
  )
}
