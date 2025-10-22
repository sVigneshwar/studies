import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

export default function Todo() {

  return (
    <>
    <h1>Todo App</h1>
    <TodoInput />
    <TodoList />
    </>
  )
}
