import React, { useReducer, useState } from 'react'

function reducer(state, actions){
  switch(actions.type){
    case "increment":
      return state = state + 1;
    case "decrement": 
      return state = state - 1;
    default:
      return state
  }
}

export default function UseReducerTest() {
    const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>

      <h1>{count}</h1>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
      
    </div>
  )
}
