import React, { useEffect, useState } from 'react'

export default function App() {
  const [endpoint, setEndpoint] = useState("users")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchData = async () => {
      try{
        setLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const result = await res.json()     
        
        if(!res.ok){
          setError(true)
          return;
        }
        setError(false)
        setData(result)
      }catch(err){
        console.log(err);
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint])

  return (
    <div>
      <button onClick={() => setEndpoint('users')}>Users</button>
      <button onClick={() => setEndpoint('posts')}>Posts</button>
      <button onClick={() => setEndpoint('postss')}>Faulty URL</button>
      {loading && <p>Loading</p>}
      {error && <p>Something wrong!</p>}
      {!loading && !error && <pre>{JSON.stringify(data, null, 4)}</pre>}      
    </div>
  )
}
