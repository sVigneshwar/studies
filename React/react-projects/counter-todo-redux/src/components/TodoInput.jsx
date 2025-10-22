import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateTodoInput, clearInput, addTodo} from '../slice/todoSlice'

export default function TodoInput() {
    const todoInput = useSelector(state => state.todo.todoInput)
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        if(todoInput === "") return
        dispatch(addTodo(todoInput))
        dispatch(clearInput())
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoInput} onChange={(e) => dispatch(updateTodoInput(e.target.value))} />
      </form>
    </div>
  )
}
