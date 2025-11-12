import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Dashboard() {
  const store = useSelector(store => store.auth)

  return (
    <div>
      <h1>Dashboard</h1>
      {store.userData && <h3>Welcome {store.userData.firstName}</h3>}
    </div>
  )
}
