import React, { useEffect, useState } from 'react'

export default function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todo, setTodo] = useState(()=>{
    var localValue = localStorage.getItem("ITEMS");
    if(localValue){
      return JSON.parse(localValue)
    }

    return []
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  },[todo])

  function handleSubmit(e){
    e.preventDefault()
    if(newTodo === ""){return}
    setTodo([...todo, {id:Date.now(), value: newTodo, completed: false}])
    setNewTodo("")    
  }

  function deleteTodo(id){
    setTodo(todo.filter(val=> val.id !== id))
  }

  function handleCheckbox(id){
    setTodo(
      todo.map(val => {
        if(val.id === id){
          return {...val, completed: !val.completed}
        }else{
          return val
        }
      })
    )
  }

  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={handleSubmit}>
      <input type="input" placeholder='Enter Todo' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
    <h2>List</h2>
    <ul>
      {todo.length === 0&&<li>No List Found</li>}
      {
        todo.map(val => {
          return (
            <li key={val.id}>
              <label>
                <input type="checkbox" checked={val.completed} onChange={e=>handleCheckbox(val.id)} />
                {val.value}
              </label>
              <button onClick={() => deleteTodo(val.id)}>Delete</button>
            </li>
          )
        })
      }
    </ul>
    </>
  )
}
