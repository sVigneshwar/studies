import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEndpoint, fetchDatas } from './slice/dataSlice';

export default function App() {
  const {loading, error, data, endpoint} = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDatas())
  }, [endpoint])

  return (
    <div>
      <button onClick={() => dispatch(updateEndpoint('users'))}>Users</button>
      <button onClick={() => dispatch(updateEndpoint('posts'))}>Posts</button>
      <button onClick={() => dispatch(updateEndpoint('postss'))}>Faulty URL</button>
      {loading && <p>Loading</p>}
      {error && <p>Something wrong!: {error}</p>}
      {!loading && !error && <pre>{JSON.stringify(data, null, 4)}</pre>}      
    </div>
  )
}
