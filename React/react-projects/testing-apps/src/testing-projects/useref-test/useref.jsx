import React, { useEffect, useRef, useState } from 'react'
// rendercount
//focus
//store previuos value

export default function UseRef() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef();
    const previousValue = useRef('');

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    function focus(){
        inputRef.current.focus()
    }

    useEffect(() => {
        previousValue.current = name;
    })

  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    <p>I rendered {renderCount.current} times</p>
    <button onClick={focus}>Focus</button>
    <p>Input has {name == "" ? "Nothing" : name}, but it previously had {previousValue.current == "" ? "Nothing": previousValue.current}</p>
    </>
  )
}
