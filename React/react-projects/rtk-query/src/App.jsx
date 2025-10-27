import React from 'react'
import {useGetUsersQuery} from './service/api'

export default function App() {
  const {data, error, isLoading} = useGetUsersQuery();

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Something Wrong</p>
  return (
    <>
    <ul>
      {
        data.map(val=>{
          return <li key={val.id}>{val.name}</li>
        })
      }
    </ul>
    </>
  )
}
