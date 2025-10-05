import React, { useEffect, useState } from 'react'

export default function List({getNumber}) {
    const [item, setItems] = useState([])

    useEffect(()=>{
        setItems(getNumber(10))
        console.log("number changed")
    }, [getNumber])
  return (
    <>
    {item.map(val => {
        return <p key={val}>{val}</p>
    })}
    </>
  )
}
