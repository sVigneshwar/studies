import React, { useEffect, useState } from 'react'
import { useGetPostQuery, useDeletePostMutation, useAddPostMutation} from './service/api'

export default function App() {
  const [deleteID, setDeleteID] = useState(null)
  const [DeletedMessage, setDeletedMessage] = useState(false)
  const [AddedMessage, setAddedMessage] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const {data: posts, error: postsError, isLoading: postsLoading} = useGetPostQuery();
  const [deletePost, {isLoading: deletePostLoading, error: deletePostError, isSuccess: deletePostSuccess}] = useDeletePostMutation();
  const [addPost, {isLoading: addPostLoading, error: addPostError, isSuccess: addPostSuccess}] = useAddPostMutation();
  const handleDelete = id => {
    setDeleteID(id)
    deletePost(id)
  }

  useEffect(() => {
    if(deletePostSuccess){
      setDeletedMessage(true)
      const timer = setTimeout(() => setDeletedMessage(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [deletePostSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost({
      name: inputValue
    })
    setInputValue("")
  }

  useEffect(() => {
    if(addPostSuccess){
      setAddedMessage(true)
      const timer = setTimeout(() => setAddedMessage(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [addPostSuccess])
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit'>{addPostLoading? "Adding..." : "Add Post"}</button>
      </form>
      {postsLoading&&<p>Loading...</p>}
      {postsError&&<p>Error Message: {postsError.error}</p>}
      {!postsLoading&&!postsError&&      
      <ul>
        {posts.slice(0,10).map(post => {
          return (
          <li key={post.id}>
            {post.name} 
            <button onClick={() => handleDelete(post.id)}>
              {deleteID === post.id ? "Deleteing Post..." : "Delete"}
            </button>
          </li>)
        })}
      </ul>
      }
      {DeletedMessage && <p>Deleted Succesfully!</p>}
      {AddedMessage && <p>Added Successfully</p>}
    </>
  )
}
