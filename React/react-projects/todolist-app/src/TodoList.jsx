import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { ListContext } from './App'

export default function TodoList() {
    const [todo] = useContext(ListContext)
  return (
    <>
     <ul>
      {todo.length === 0&&<li>No List Found</li>}
      {
        todo.map(val => {
          return (
            <TodoItem key={val.id} {...val} />
          )
        })
      }
    </ul> 
    </>
  )
}
