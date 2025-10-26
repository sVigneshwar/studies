import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUser } from './slice/userSlice'
import { resetUserData } from './slice/userSlice'

export default function App() {
  const {userData, loading, error} = useSelector(store => store.user)
  const {postData, postLoading, postError} = useSelector(store => store.post)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Component Rendered')
  }, [])

  return (
    <>
    <button onClick={()=>dispatch(fetchUser())}>Load User</button> 
    <br />
    <button onClick={() => dispatch(resetUserData())}>Clear Data</button>
    <h3>👤 User Info:</h3>
    {loading && <p>Loading</p>}
    {error && <p>{error}</p>}
    {!loading && !error && <pre>{JSON.stringify(userData, null, 4)}</pre>}
    <h3>📝 User Posts:</h3>
    {postLoading && <p>Loading</p>}
    {postError && <p>{postError}</p>}
    {!postLoading && !postError && <pre>{JSON.stringify(postData, null, 4)}</pre>}
    </>
  )
}
