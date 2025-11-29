import React, { useEffect } from 'react'
import {useGetUserQuery, useAddPostMutation, useLazyGetUserQuery} from './slice'

export default function Day8b() {

    const [getpost, {data: getPostData, isLoading: getPostLoading, error: getPostError}] = useLazyGetUserQuery()
    const [addPost, {data: addPostData, isLoading: addPostLoading, error: addPostError}] = useAddPostMutation()

    // const [getPost, {data:getPostData, isLoading:getPostLoading , error: getPostError}] = useLazyGetPostQuery();
    // const [addPost, {data:addPostData, isLoading:addPostLoading , error: addPostError, isSuccess: addPostSuccess}] = useAddPostMutation();

    useEffect(() => {
        getpost()
    }, [])

  return (
    <>
        <h1>Get post while window load</h1>
        {getPostLoading && <p>loading...</p>}
        {getPostError && <p>error...</p>}
        {getPostData && <pre>{JSON.stringify(getPostData, null, 4)}</pre>}


        <h1>Add post while clicking</h1>
        <button onClick={() => addPost({name: "vickys new post"})}>Add post</button>
        {addPostLoading && <p>loading...</p>}
        {addPostError && <p>error...</p>}
        {addPostData && <pre>{JSON.stringify(addPostData, null, 4)}</pre>}
    </>
  )
}