import React, { useEffect, useState } from 'react'

export default function WindowWidth() {
    const [width, setWidth] = useState(window.outerWidth)
    useEffect(()=>{
        window.addEventListener("resize", ()=>setWidth(window.outerWidth))

        return window.removeEventListener("resize") // this return basically destroys the event listener or any other which we have called inside useeffect. we need to remove while unmounting a component
    }, width)
  return (
    <div>
      <p>{width}</p>
    </div>
  )
}
