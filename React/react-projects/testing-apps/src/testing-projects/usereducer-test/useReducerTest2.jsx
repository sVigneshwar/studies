import React, { useEffect, useReducer, useState } from 'react'
import UseReducerTest2Tasks from './UseReducerTest2Tasks'


export const ACTIONS = {
    ADDTASK: "addTask",
    DELETETASK: "deleteTask",
    COMPLETETASK: "completeTask"
}

function reducer(state, actions){
    switch(actions.type){
        case ACTIONS.ADDTASK:
            return [...state, {id: Date.now(), task: actions.payload.task, completed: false}]
        case ACTIONS.DELETETASK:
            return state.filter(val => val.id !== actions.payload.id)
        case ACTIONS.COMPLETETASK:
            return state.map(val=>{
                if(val.id === actions.payload.id){
                    return {...val, completed: !val.completed}
                }else{
                    return val
                }
            })
        default: 
            return state
    }
}


export default function UseReducerTest2() {
    const [task, setTask] = useState("")
    const [allTasks, dispatch] = useReducer(reducer, [], ()=>{
        var localData = localStorage.getItem("TASKS")
        if(localData){
            return JSON.parse(localData)
        }
    })
    function handleSubmit(e){
        e.preventDefault()
         if (!task.trim()) return;
        dispatch({type: ACTIONS.ADDTASK, payload: {task: task}})
        setTask("")
    }

    useEffect(() => {
        localStorage.setItem("TASKS", JSON.stringify(allTasks));
    }, [allTasks]);

  return (
    <>
    <h1>Add Task</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Tasks' value={task} onChange={e=>{setTask(e.target.value)}} />
    </form>
    <UseReducerTest2Tasks allTasks={allTasks} dispatch={dispatch} />
    </>
  )
}