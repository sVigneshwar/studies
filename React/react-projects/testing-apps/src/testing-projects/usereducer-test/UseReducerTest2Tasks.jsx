import React from 'react'
import { ACTIONS } from './useReducerTest2'

export default function UseReducerTest2Tasks({allTasks, dispatch}) {
  return (
    <>
      <ul>
        {allTasks.map(val=>{
            return <li key={val.id}>
                <span style={val.completed?{ color: "green"}: undefined}>{val.task} </span>                
                <button onClick={()=> dispatch({type: ACTIONS.COMPLETETASK, payload: {id: val.id}})}>{val.completed?"Un": ""}Complete Task</button> 
                <button onClick={()=> dispatch({type: ACTIONS.DELETETASK, payload: {id: val.id}})}>Delete Task</button></li>
        })}
    </ul>
    </>
  )
}
