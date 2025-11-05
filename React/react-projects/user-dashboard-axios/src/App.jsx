import React, { useEffect, useState } from 'react'
import { getUsers, postUsers } from './service/userService'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [inputVal, setInputVal] = useState("")
  const [addedMessage, setAddedMessage] = useState(false)

  useEffect(() => {
    const handleGetData = async () => {
      setLoading(true)
      try{
        const userData = await getUsers()
        setData(userData.slice(0,5))
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
    handleGetData()
  }, [])

  const addUser = async (newData) => {
    if(newData.name === "") return
    try{
      const newUser = await postUsers(newData)
      setData(data => [...data, newUser])
      setInputVal("")
      setAddedMessage(true)
      setTimeout(() => setAddedMessage(false), 2000)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p style={{color: "red"}}>Something went wrong...{error.respose?.statusText || error.message}</p>}
    {!loading && !error && 
    <>
    <h2>User List</h2>
    <ul>
      {data.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
    <input value={inputVal} onChange={e=>setInputVal(e.target.value)} />
    <button onClick={() => addUser({name: inputVal})}>Add 1 more user</button>
    {addedMessage && <p>User added successfully!</p>}
    </>
    }
    </>
  )
}
