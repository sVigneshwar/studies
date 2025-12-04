import React, { useEffect, useState } from 'react'

export default function Skills({skills}) {
    const [login, setLogin] = useState(false)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLogin(true)
        }, 1001)

        return () => {
            clearTimeout(timer)
        }
    }, [])
  return (
    <>
    <ul>
      {
        skills.map(skill => {
            return <li key={skill}>{skill}</li>
        })
      }
    </ul>
    {
        login
        ? <button>Start learning</button> 
        : <button onClick={() => setLogin(true)}>Login</button> 
    }
    </>
  )
}
