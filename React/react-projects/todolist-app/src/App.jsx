import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export const FormContext = React.createContext()
export const ListContext = React.createContext()

export default function App() {
  const [todo, setTodo] = useState(()=>{
    var localValue = localStorage.getItem("ITEMS");
    if(localValue){
      return JSON.parse(localValue)
    }
    return []
  })

  function addTodo(value){
    setTodo([...todo, {id:Date.now(), value: value, completed: false}])
  }

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  },[todo])

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
      <FormContext.Provider value={addTodo}>
        <h1>Todo App</h1>
        <TodoForm />
      </FormContext.Provider>

      <ListContext.Provider value={[todo, handleCheckbox, deleteTodo]}>
        <h2>List</h2>
        <TodoList />
      </ListContext.Provider>      
    </>
   
  )
}
