import { useState, useReducer } from 'react'
import CounterApp from './testing-projects/counter-app/counter-app'
import Todo from './testing-projects/todo/todo'
import Todo2 from './testing-projects/todo2/todo'
import ChatApp from './testing-projects/chat-app/chat-app'

export default function App() {
  return(
    <>
    <ChatApp />
    {/* <Todo2 />
    <Todo />
    <CounterApp /> */}
    </>
  )
}