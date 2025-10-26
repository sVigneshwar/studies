import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUser } from './slice/userSlice'
import { resetUserData } from './slice/userSlice'
import { fetchUser1, postUser1, putUser1, patchUser1, deleteUser1 } from './slice/user1Slice'

export default function App() {
  const {userData, loading, error} = useSelector(store => store.user)
  const {postData, postLoading, postError} = useSelector(store => store.post)
  const {user1Data, user1Loading, user1Error} = useSelector(store => store.user1)
  const dispatch = useDispatch()
  const postDummyData = {id: 11, name: 'Vigneshwar', email: 'vignesh@test.com', type: 'post'}
  const putDummyData = {id: 11, name: 'Vigneshwar', email: 'vignesh@test.com', type: 'put'}
  const patchDummyData = {name: 'Vigneshwar'}

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


    <hr />
    <button onClick={()=>dispatch(fetchUser1())}>Fetch User1</button>
    <button onClick={()=>dispatch(postUser1(postDummyData))}>Post User</button>
    <button onClick={() => dispatch(putUser1({id: 1, updates: putDummyData}))}>Put User 1</button>
    <button onClick={() => dispatch(patchUser1({id: 1, updates: patchDummyData}))}>Patch User 1</button>
    <button onClick={() => dispatch(deleteUser1({id: 1}))}>Delete User 1</button>
    {user1Loading && <p>Loading</p>}
    {user1Error && <p>{user1Error}</p>}
    {!user1Loading && !user1Error && <pre>{JSON.stringify(user1Data, null, 4)}</pre>}
    </>
  )
}
