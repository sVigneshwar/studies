import React from 'react'
import { useLazyGetPostQuery, useAddPostMutation } from './service/api'

export default function App() {
  const [getPost, {data:getPostData, isLoading:getPostLoading , error: getPostError}] = useLazyGetPostQuery();
  const [addPost, {data:addPostData, isLoading:addPostLoading , error: addPostError, isSuccess: addPostSuccess}] = useAddPostMutation();

  return (
    <>
      <button onClick={() => getPost()} disabled={getPostLoading}>Get Post</button>      
      <button onClick={() => addPost({title: "New post from Vigneshwar"})} disabled={addPostLoading}>Add Post</button>
      {getPostLoading && <p>Getting post...</p>}
      {getPostError && <p style={{color: "red"}}>Something went wrong with getting post</p>}
      {!getPostLoading && !getPostError && <pre>{JSON.stringify(getPostData, null, 2)}</pre>}
    </>
  )
}