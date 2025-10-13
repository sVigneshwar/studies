import React, { useContext } from 'react'
import { ListContext } from './App'

export default function TodoItem({id, value, completed}) {
    const [todo, handleCheckbox, deleteTodo] = useContext(ListContext)
  return (
    <>
      <li>
            <label>
            <input type="checkbox" checked={completed} onChange={e=>handleCheckbox(id)} />
            {value}
            </label>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    </>
  )
}
