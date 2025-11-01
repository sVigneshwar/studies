import React, { useEffect, useRef, useState } from 'react';
import { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from './service/api';


export default function App() {
  const {data: getTodoData, error: getTodoError, isLoading: getTodoIsLoading} = useGetTodoQuery();
  const [addTodo, {error: addTodoError, isLoading: addTodoIsLoading, isSuccess: addTodoIsSuccess, reset: addTodoReset}] = useAddTodoMutation();
  const [deleteTodo, {error: deleteTodoError, isLoading: deleteTodoIsLoading, isSuccess: deleteTodoIsSuccess, reset: deleteTodoReset}] = useDeleteTodoMutation();
  const [updateTodo, {error: updateTodoError, isLoading: updateTodoIsLoading, isSuccess: updateTodoIsSuccess, reset: updateTodoIsReset}] = useUpdateTodoMutation();
  const [inputValue, setInputValue] = useState("") 
  const [toaster, setToaster] = useState({visible: false, message: ""})
  const [deleteButtonID, setDeleteButtonID] = useState("")
  const [updateButtonID, setUpdateButtonID] = useState(null)
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue === '') return;
    addTodo({name: inputValue, createdAt: false});
    setInputValue("")
    inputRef.current.focus()
  }

  const deleteTodoButton = id => {
    setDeleteButtonID(id)
    deleteTodo(id)
    
  }

  const updateTodoButton = todo => {
    setUpdateButtonID(todo.id)
    updateTodo({id: todo.id, newData: {...todo, createdAt: !todo.createdAt}})
  }

  useEffect(() => {
    console.log("check rendering");
    if(addTodoIsSuccess){
      setToaster({visible: true, message: "Added Successfully"})    
      addTodoReset()
    }
    if(deleteTodoIsSuccess){
      setToaster({visible: true, message: "Deleted Successfully"})    
      setDeleteButtonID(null);
      deleteTodoReset()
    }
    if(updateTodoIsSuccess){
      setToaster({visible: true, message: "Updated Successfully"})    
       setUpdateButtonID(null);
      updateTodoIsReset()
    }
    const timer = setTimeout(() => setToaster({visible: false, message: ""}), 1000)
    return () => clearTimeout(timer)
  }, [addTodoIsSuccess, deleteTodoIsSuccess, updateTodoIsSuccess])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
      <button type='submit' disabled={addTodoIsLoading}>{addTodoIsLoading? 'Adding...': 'Add Todo'}</button>
    </form>
    {getTodoIsLoading && <p>Data Loading...</p>}
    {getTodoError && <p style={{color: "red"}}>Error: {getTodoError.data}</p>}
    {!getTodoIsLoading && !getTodoError && (getTodoData.length === 0 ? <p>No Data Found</p>:<ul>
      {getTodoData.map(todo => {
        return (
        <li key={todo.id}>{todo.name}  
          <button onClick={() => deleteTodoButton(todo.id)} disabled={deleteButtonID === todo.id}>{deleteButtonID === todo.id ? "Deleting..." : "Delete"}</button> 
          <button onClick={() => updateTodoButton(todo)} disabled={updateButtonID === todo.id && updateTodoIsLoading}>
            {updateButtonID === todo.id && updateTodoIsLoading
            ? 'Updating'
            : todo.createdAt ? 'Revert': "Complete"}
          </button>
        </li>
        )
      })}
    </ul>)}
    
    {toaster.visible && <div className='toaster'>{toaster.message}</div>}
    
    </>
  )
}
