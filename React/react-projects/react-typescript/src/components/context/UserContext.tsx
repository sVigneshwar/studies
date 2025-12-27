import React, { createContext, useState } from 'react'

type Authuser = {
    name: string
    email: string
}

type userContextType = {
    user: Authuser | null
    setUser: React.Dispatch<React.SetStateAction<Authuser | null>>
}

export const userContext = createContext({} as userContextType)

export default function UserContextProvider({children}:{children: React.ReactNode}) {
    const [user, setUser] = useState<Authuser | null>(null)
  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  )
}
