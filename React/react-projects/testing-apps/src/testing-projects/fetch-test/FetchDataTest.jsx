import React, { useEffect, useState } from 'react'

export default function FetchDataTest() {
    const [data, setData] = useState("posts")
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const controller = new AbortController()
        const signal = controller.signal;

        setLoading(true)
        setError(null)

        const fetchData = async function(){
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${data}`, {signal});
                if(!res.ok) throw new Error ("URL Not Right");
                const json = await res.json();
                console.log(json)
                setTimeout(()=>{
                    setContent(JSON.stringify(json.slice(0,10), null, 2))
                    setLoading(false)
                }, 1000)                
            }catch(err){
                console.error(err)
                setLoading(false)
                setError(err.message)
            }            
        }
        fetchData()

        return function(){
            controller.abort()
        }

    }, [data])

  return (
    <>
    <div>
        <button onClick={()=>setData('posts')}>posts</button>
        <button onClick={()=>setData('users')}>users</button>
        <button onClick={()=>setData('todos')}>todos</button>
    </div>

    <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
        {!loading && !error && <pre>{content}</pre>}
    </div>
    </>
  )
}
