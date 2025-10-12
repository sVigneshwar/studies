import React, { useEffect, useState } from 'react'

function windowWidth(){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
      const updateWidth = ()=>setWidth(window.innerWidth)
      window.addEventListener("resize", updateWidth)
      return ()=>window.removeEventListener("resize", updateWidth)
    })

    return width;
}

export default function AdvancedReactTopics1() {
  var width = windowWidth()
  return (
    <>
    <p>window width is {width}</p>
    </>
  )
}
