import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [data, setData] = useState("posts")
    const [item, setitem] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${data}`)
            .then(response => response.json())
            .then(json => setitem(json))
    }, [data])
  return (
    <>
        <button onClick={e => setData("posts")}>Posts</button>
        <button onClick={e => setData("comments")}>Users</button>
        <button onClick={e => setData("albums")}>Comments</button>

        <ul>
            {item.map((val, index) => {
                if(index < 10){
                    return <li>{JSON.stringify(val)}</li>
                }
            })}
        </ul>
    </>
  )
}
