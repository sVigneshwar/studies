import React from 'react'
import { getPost, addPost } from './slice/postSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function App() {
  const {getPostData,getPostLoading,getPostError,addPostData,addPostLoading,addPostError} = useSelector(store => store.post)
  const dispatch = useDispatch()

  const getPostClick = () => {
    dispatch(getPost())
  }

  const addPostClick = () => {
    dispatch(addPost())
  }

  return (
    <>
      <button onClick={getPostClick}>Get Post</button>
      {getPostLoading && <p>Getting post...</p>}
      {getPostError && <p style={{color: "red"}}>Something went wrong with getting post</p>}
      {!getPostLoading && !getPostError && getPostData !=="" && <pre>{JSON.stringify(getPostData.slice(0,3), null, 2)}</pre>}
      <hr/ >
      <button onClick={addPostClick}>Add Post</button>
      {addPostLoading && <p>Adding post...</p>}
      {addPostError && <p style={{color: "red"}}>Something went wrong with adding post</p>}
      {!addPostLoading && !addPostError && addPostData !=="" && <><p>New post added, mentioned below</p><pre>{JSON.stringify(addPostData, null, 2)}</pre></>}
    </>
  )
}
