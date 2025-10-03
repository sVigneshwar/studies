import React from 'react'
import { ACTIONS } from './todo'

export default function TodoList({val, dispatch}) {
  return (
    (
        <li>
            {val.complete ? <span style={{color: "green"}}>{val.name}</span> : <span>{val.name}</span>}
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: val.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: val.id}})}>Delete</button>
        </li> 
    )
  )
}
