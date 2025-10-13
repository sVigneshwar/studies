import React, { useContext, useRef, useState } from 'react';
import { FormContext } from './App';

export default function TodoForm() {
    const [newTodo, setNewTodo] = useState("")

    const inputRef = useRef("")

    const addTodo = useContext(FormContext)

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
