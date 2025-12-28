import { useState } from 'react'
import Login from './Login'
import type { ProfilePropsType } from './Profile'

type PrivatePropsType = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfilePropsType>
}

export default function Private({ isLoggedIn, component: Component }: PrivatePropsType) {
  const [logged, setLogged] = useState<boolean>(isLoggedIn)

  function toggle() {
    setLogged(prev => !prev)
  }

  return (
    <>
      {logged ? <Component name="vicky" /> : <Login />}
      <div style={{ marginTop: 12 }}>
        <button onClick={toggle}>{logged ? 'Logout' : 'Login'}</button>
      </div>
    </>
  )
}
