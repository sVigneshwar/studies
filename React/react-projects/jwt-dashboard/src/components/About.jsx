import React from 'react'
import {useSelector} from 'react-redux'

export default function About() {
  const store = useSelector(store => store.auth)

  return (
    <div>
        <h1>About Page</h1>
        {store.userData && <pre>{JSON.stringify(store.userData, null, 2)}</pre>}
    </div>
  )
}
