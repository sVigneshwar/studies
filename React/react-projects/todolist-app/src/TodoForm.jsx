import React, { useRef, useState } from 'react';

export default function TodoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState("")

    const inputRef = useRef("")

    function handleSubmit(e){
        e.preventDefault()
        if(newTodo === ""){return}       
        addTodo(newTodo)
        setNewTodo("")
        inputRef.current.focus()
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="input" placeholder='Enter Todo' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type='submit'>Add Todo</button>
    </form>
    </>
  )
}
