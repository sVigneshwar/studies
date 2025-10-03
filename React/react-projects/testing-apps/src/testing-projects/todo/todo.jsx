import { useState, useReducer } from 'react'
import TodoList from './todo-list'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, actions){
    switch (actions.type){
        case ACTIONS.ADD_TODO:
            // return [...todos, {id: actions.id, name: actions.name, complete: false}]
            return [...todos, newTodo(actions.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            var updatedArr = todos.map(val=>{
                if(val.id === actions.payload.id){
                    return {...val, complete: !val.complete}
                }else{
                    return val
                }
            })
            return updatedArr;
        case ACTIONS.DELETE_TODO:
            return todos.filter(val => val.id !== actions.payload.id)
        default:
            return todos

    }
}

function newTodo(name){
    return {id: Date.now(), name: name, complete: false}
}

export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload: {name: name}})
        setName("")
    }
  return (
    <>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}  />
        </form>
        <ul>
            {todos.map(val => {
                return <TodoList key={val.id} val={val} dispatch={dispatch}  />
            })}
        </ul>
    </>
  )
}