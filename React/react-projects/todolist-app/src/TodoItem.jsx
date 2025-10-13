import React from 'react'

export default function TodoItem({id, value, completed, handleCheckbox, deleteTodo}) {
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
