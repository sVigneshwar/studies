import React, { useReducer, useState } from 'react'
import TodoList from './todo-list'

export const ACTIONS = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    TOGGLE_TODO: "toggle-todo",
}

function reducer(todos, actions){
    switch(actions.type){
        case ACTIONS.ADD_TODO:
            return [...todos, {id: Date.now(), name: actions.payload.name, complete: false}]
        case ACTIONS.DELETE_TODO:
            return todos.filter(val => val.id !== actions.payload.id)
        case ACTIONS.TOGGLE_TODO:
            return todos.map(val => {
                if(val.id === actions.payload.id){
                    return {...val, complete: !val.complete}
                }else{
                    return val;
                }
            })
    }
}

export default function Todo2() {
    const [name, setName] = useState("")
    const [todos, dispatch] = useReducer(reducer, [])
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName("")        
    }
    return (
        <>
        <h1>Todo 2</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />            
        </form>
        <ul>
            {todos.map(val => {
                return <TodoList key={val.id} val={val} dispatch={dispatch} />
            })}
        </ul>
        </>
    )
}
