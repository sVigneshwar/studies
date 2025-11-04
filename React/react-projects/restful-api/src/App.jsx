import React, { useEffect } from 'react'
import { fetchDataWithFetch, postDataWithFetch, fetchDataWithAxios, postDataWithAxios } from './ApiPractice'

export default function App() {

  useEffect(() => {
    fetchDataWithFetch();
    postDataWithFetch();
    fetchDataWithAxios();
    postDataWithAxios();
  }, [])

  return (
    <div>
      Restful api
    </div>
  )
}
