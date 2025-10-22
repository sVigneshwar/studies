import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteTodo, toggleTodo} from '../slice/todoSlice'

export default function TodoList() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    useEffect(()=>{
      localStorage.setItem("TodoList", JSON.stringify(todos))
    }, [todos])
  return (
    <div>
      <ul>
        {/* {console.log(todos)} */}
        {todos.length === 0
          ? <li>No Todos Found</li>
          : todos.map(todo =>{
            return (
              <li key={todo.id}>
                {todo.value}
                <button onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed?"Revert": "Complete"}</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </li>
            )
          })
        }        
      </ul>
    </div>
  )
}
