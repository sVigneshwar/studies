import { useState, useReducer } from 'react'
import CounterApp from './testing-projects/counter-app/counter-app'
import Todo from './testing-projects/todo/todo'


export default function App() {
  return(
    <>
    <Todo />
    <hr />
    <CounterApp />
    <hr />   
    </>
  )
}