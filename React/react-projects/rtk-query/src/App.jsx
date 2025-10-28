import React from 'react'
import { useGetUserQuery } from './service/api'

export default function App() {
  const {data, error, isLoading} = useGetUserQuery()

  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error.error}</p>}
    {
    !isLoading 
    && !error 
    && <ul>
      {
        data.map(val => <li key={val.id}>{val.name}</li>)
      }
    </ul>
    }
    </>
  )
}
