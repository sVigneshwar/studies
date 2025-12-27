import { useContext } from "react"
import { userContext } from "./UserContext"

export default function User() {
    const UserContext = useContext(userContext)
    
    const handleLogin = () => {
        UserContext.setUser({
            name: "vicky",
            email: "vicky@test.com"
        })
    }
    const handleLogout = () => {
        UserContext.setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>Username is {UserContext.user?.name}</p>
      <p>Useremail is {UserContext.user?.email}</p>
    </div>
  )
}
