import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todo, handleCheckbox, deleteTodo}) {
  return (
    <>
     <ul>
      {todo.length === 0&&<li>No List Found</li>}
      {
        todo.map(val => {
          return (
            <TodoItem key={val.id} {...val} handleCheckbox={handleCheckbox} deleteTodo={deleteTodo} />
          )
        })
      }
    </ul> 
    </>
  )
}
