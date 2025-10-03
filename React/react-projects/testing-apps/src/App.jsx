import { useState, useReducer } from 'react'
import CounterApp from './testing-projects/counter-app/counter-app'
import Todo from './testing-projects/todo/todo'
import Todo2 from './testing-projects/todo2/todo'

export default function App() {
  return(
    <>
    <Todo2 />
    {/* <hr />
    <Todo />
    <hr />
    <CounterApp />
    <hr />    */}
    </>
  )
}