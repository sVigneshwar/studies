import React, { useState } from 'react';
import { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from './service/api';


export default function App() {
  const {data: getTodoData, error: getTodoError, isLoading: getTodoIsLoading} = useGetTodoQuery();
  const [addTodo, {error: addTodoError, isLoading: addTodoIsLoading, isSuccess: addTodoIsSuccess}] = useAddTodoMutation();
  const [deleteTodo, {error: deleteTodoError, isLoading: deleteTodoIsLoading, isSuccess: deleteTodoIsSuccess}] = useDeleteTodoMutation();
  const [updateTodo, {error: updateTodoError, isLoading: updateTodoIsLoading, isSuccess: updateTodoIsSuccess}] = useUpdateTodoMutation();
  const [inputValue, setInputValue] = useState("") 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue === '') return;
    addTodo({name: inputValue, createdAt: false});
    setInputValue("")
  }

  const deleteTodoButton = id => {
    deleteTodo(id)
  }

  const updateTodoButton = todo => {
    updateTodo({id: todo.id, newData: {...todo, createdAt: !todo.createdAt}})
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
    {getTodoIsLoading && <p>Data Loading...</p>}
    {getTodoError && <p style={{color: "red"}}>Error: {getTodoError.data}</p>}
    {!getTodoIsLoading && !getTodoError && (getTodoData.length === 0 ? <p>No Data Found</p>:<ul>
      {getTodoData.map(todo => {
        return (
        <li key={todo.id}>{todo.name}  
          <button onClick={() => deleteTodoButton(todo.id)}>Delete</button> 
          <button onClick={() => updateTodoButton(todo)}>{todo.createdAt ? 'Revert': "Complete"}</button>
        </li>
        )
      })}
    </ul>)}

    <div className='toaster'>toaster</div>
    </>
  )
}
