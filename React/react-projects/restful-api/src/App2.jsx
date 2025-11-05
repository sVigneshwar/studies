import React, { useEffect } from 'react'
import { api } from './services2/api'

export default function App2() {

    useEffect(() => {
        api.get("/posts").then(res => console.log(res.data.slice(0,3)))
    }, [])
  return (
    <div>
      Restful api
    </div>
  )
}